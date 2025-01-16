import "./AuthForms.css";
import { useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

export default function RegisterForm({ toggle }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [DOB, setDOB] = useState("");
    const [health, setHealth] = useState("");
    const [error, setError] = useState("");

    const { user, login, logout } = useContext(MainContext);

    function register(event){
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:6969/auth/register";
        const FORM_DATA = {
            "email": email,
            "password": password,
            "name": name,
            "DOB" : DOB,
            "health" : health

        }

        axios.post(ENDPOINT_URL, FORM_DATA)
            .then(response => {
                console.log(response.data)
                login(response.data)
            })
            .catch(error => {
                setError(error?.response?.data?.detail || "Error occured")
            })
    }
    return(
        <form className="auth-form" onSubmit={register}>
            <input type="email" placeholder="Email Address" value={email} onChange={(em => setEmail(em.target.value))} required />
            <input type="text" placeholder="Full name" value={name} onChange={(nm => setName(nm.target.value))} required />
            <input type="text" placeholder="DD/MM/YYYY" value={DOB} onChange={(d => setDOB(d.target.value))} required />
            <input type="password" placeholder="Password" value={password} onChange={(pass => setPassword(pass.target.value))} required/>
            <input type="text" placeholder="Health detail" value={health} onChange={(hlth => setHealth(hlth.target.value))} />
            {/*NOTE: Check the input type for the DOB, if text or DOB depending on datetime library*/}

            <div className="auth-options-row">
                <button type="submit" className="auth-confirm">Register</button>

                <div className="auth-swap-container">
                    <span>Already have an account?</span>
                    <button className="auth-swap-btn" onClick={toggle}>Log In</button>
                </div>
            </div>
            {
                error ? <div className="error">{error}</div>
                    : null
            }
        </form>
    )
}

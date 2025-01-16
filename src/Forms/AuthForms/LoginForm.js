import "./AuthForms.css";
import { useState } from "react";

export default function LoginForm({toggle}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form className="auth-form">
            <input type="email" placeholder="Email" value={email} onChange={(em) => setEmail(em.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(pass) => setPassword(pass.target.value)}/>

            <div className="auth-options-row">
                <button type="submit" className="auth-confirm">Log in</button>
                
                <div className="auth-swap-container">
                    <span>Don't have and account?</span>
                    <button className="auth-swap-btn" onClick={toggle}>
                        Sign up
                    </button>
                </div>
            </div>
        </form>
    )
}
import "./AuthForm.css";
import { useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

export default function RegisterForm({ toggle }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const { user, login, logout } = useContext(MainContext);

    function register(event){
        event.preventDefault();

        const ENDPOINT_URL = "http://localhost:6969/auth/register";
        const FORM_DATA = {
            "email": email,
            "password": password,
            "username": name
        }

        axios.post(ENDPOINT, FORM_DATA)
            
    }
}

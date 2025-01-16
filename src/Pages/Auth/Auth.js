import "./Auth.css";
import LoginForm from "../../Forms/AuthForms/LoginForm";
import RegisterForm from "../../Forms/AuthForms/RegisterForm";
import { useState } from 'react';


export default function Auth(){

    const [isRegister, setIsRegister] = useState(true);

    function toggleForms(){
        setIsRegister(!isRegister);
    }

    return(
        <>
            <div className="auth-container">
                <div className="//Put a classname">
                    <h1>Put a banner here</h1>
                </div>
                <div className="auth-form-column">
                    <h2>Unsinkable gains await</h2>
                    {
                        isRegister ? <RegisterForm toggle={toggleForms} /> : <LoginForm toggle={toggleForms} />
                    }
                </div>
            </div>
        </>
    )
}
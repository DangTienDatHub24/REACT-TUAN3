import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="overlay">
            <div className="login-form fade-in">
                <button className="close-btn" onClick={() => setVisible(false)}>
                    ×
                </button>
                <h2>Login</h2>
                <input type="text" placeholder="Username" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
}

export default LoginForm;
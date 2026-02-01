import { useState } from "react";
import "./FormInput.css";

function FormInput() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="form-container">
            <h2>Form nhập thông tin</h2>

            <input
                type="text"
                placeholder="Nhập tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
            />

            <input
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
            />

            <div className="output">
                <p><strong>Tên:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
}

export default FormInput;
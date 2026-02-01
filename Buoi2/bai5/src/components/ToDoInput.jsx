import { useState } from "react";

function TodoInput({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nhập công việc..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Thêm</button>
        </form>
    );
}

export default TodoInput;
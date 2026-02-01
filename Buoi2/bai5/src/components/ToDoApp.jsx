import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (text.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoApp;
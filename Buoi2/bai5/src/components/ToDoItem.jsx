function TodoItem({ todo, deleteTodo }) {
    return (
        <li>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
        </li>
    );
}

export default TodoItem;
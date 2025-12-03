import React from "react";
import type { Todo } from "../Context/types";

interface TodoListProps {
    todos: Todo[];
}

export default function TodoComp(props: TodoListProps) {

    const handleTodoStatus = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
        e.stopPropagation();
        const statusDiv = document.getElementById(`todo-status-${index}`);
        if (statusDiv) {
            if (statusDiv.style.display === "flex") {
                statusDiv.style.display = "none";
            } else {
                statusDiv.style.display = "flex";
            }
        }
    }
    // console.log("Todos for today:", todos);

    // Safely get todos array with validation
    const todos = Array.isArray(props.todos) ? props.todos : [];
    // console.log(todos);

    return (
        <div className="todo-dairy">
            <h2>Today's Todos</h2>
            <div>
                {todos.length === 0 ? (
                    <p>No todos available.</p>
                ) : (
                    todos.map((todo: Todo, index: number) => (
                        <div key={index}>
                            <li className="main-todo" style={{ background: todo.color }} id={`todo-${index}`}
                                onClick={(e) => handleTodoStatus(e, index)}>
                                <span>{todo.title}</span>
                                <span><i className="fa-solid fa-caret-down"></i></span>
                            </li>
                            <div className={`todo-status`} id={`todo-status-${index}`} style={{ display: 'none' }}>
                                <div className="todo-final-status">
                                    {todo.status}
                                </div>
                                {todo.img && (
                                    <div className="todo-img-box">
                                        <img src={todo.img} alt={todo.title || "Todo image"} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

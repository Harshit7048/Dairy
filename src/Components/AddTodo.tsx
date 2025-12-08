import React, { useContext, useEffect } from "react"
import type { Todo } from "../Context/types"
import UserBaseContext from "../Context/UserBaseContext"
import DateContext from "../Context/DateContext";

export default function AddTodo() {
    const [todoTitle, setTodoTitle] = React.useState<string>("");
    const [todoDate, setTodoDate] = React.useState<string>("")
    const [todoColor, setTodoColor] = React.useState<string>("#000000")
    const todoAddedRef = React.useRef<HTMLDivElement>(null);

    const currentDate = useContext(DateContext)

    const userBaseContext = useContext(UserBaseContext);
    if (!userBaseContext || !currentDate) return null;
    const { addTodo } = userBaseContext;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!todoTitle || !todoDate) return;

        const newTodo: Todo = {
            parentDairyId: currentDate,
            title: todoTitle,
            color: todoColor,
            status: "Pending",
        };
        // Use context method to update todos in the current diary
        addTodo(currentDate, newTodo);
        setTodoTitle("");
        setTodoDate("");
        setTodoColor("#000000");
    }

    const showAnimation = () => {
        if (!todoAddedRef.current) return;
        todoAddedRef.current.classList.add("todo-visible");
        setTimeout(() => {
            if (todoAddedRef.current) {
                todoAddedRef.current.classList.remove("todo-visible");
            }
        }, 1000);
    };

    return <div>
        <div className="add-todo">
            <p>Date- 27-11-2-25</p>
            <div className="todo-form">
                <div className="todo-input-box">
                    <label htmlFor="todo_title">Title</label>
                    <input type="text" name="todo_title" onChange={(e) => setTodoTitle(e.target.value)} />
                </div>
                <div className="todo-input-box">
                    <label htmlFor="todo_date">Date</label>
                    <input type="date" name="todo_title" onChange={(e) => setTodoDate(e.target.value)} />
                </div>
                <div className="todo-input-box">
                    <label htmlFor="todo_color">Colour</label>
                    <input type="color" name="todo_title" onChange={(e) => setTodoColor(e.target.value)} />
                </div>

                <button onClick={(e) => {
                    handleSubmit(e)
                    showAnimation();
                }

                } className="todo-add-btn">Add Todo</button>

            </div>




        </div>
        <div className="todo-added" ref={todoAddedRef}>
            <h2>Added</h2>
        </div>
    </div>

}
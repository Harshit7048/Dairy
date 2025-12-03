import React, { useEffect } from "react"
import type { Todo, UserBase } from "../Context/types"
import UserBaseContext from "../Context/UserBaseContext"

export default function AddTodo() {
    const [todoTitle, setTodoTitle] = React.useState<string>("");
    const [todoDate, setTodoDate] = React.useState<string>("")
    const [todoColor, setTodoColor] = React.useState<string>("#000000")
    const todoAddedRef = React.useRef<HTMLDivElement>(null);

    const userBaseContext = React.useContext<UserBase | null>(UserBaseContext);
    if (!userBaseContext) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Todo Title:", todoTitle);
        console.log("Todo Date:", todoDate);
        console.log("Todo Color:", todoColor);

        const newTodo: Todo = {
            title: todoTitle,
            date: todoDate,
            color: todoColor,
            status: "Pending",

        }
        if (!userBaseContext.todos) {
            return
        }
        userBaseContext.diaries.todos.push(newTodo);
        console.log("Updated Todos:", userBaseContext.diaries.todos);



    }
    const showAnimation = () => {
        if (!todoAddedRef.current) return;
        else if (todoAddedRef.current) {
            todoAddedRef.current.classList.add("todo-visible");
            setTimeout(() => {
                todoAddedRef.current.classList.remove("todo-visible");
            }, 1000);
        }
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
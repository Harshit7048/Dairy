import { useContext, useEffect, useRef, useState } from "react"
import UserBaseContext from "../Context/UserBaseContext";


export default function Todo() {
    const userBaseContext = useContext(UserBaseContext);
    const todos = userBaseContext?.todos || [];
    // const todoStatusRef = useRef<HTMLDivElement>(null);
    const [statusActive, setStatusActive] = useState(false);

    useEffect(() => {
        console.log("Todo Component Mounted");
        console.log("User Base Context:", userBaseContext);
    }, [userBaseContext]);


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


    return (
        <div className="todo-dairy">
            <h2>Current Todo</h2>




            <div>

                {todos.length === 0 ? <p>No todos available.</p> : todos.map((todo, index) => (
                    <div key={index}>
                        <li className="main-todo" style={{ background: todo.color }} id={`todo-${index}`}
                            onClick={(e) => handleTodoStatus(e, index)}>
                            <span>{todo.title}</span>
                            <span  ><i className="fa-solid fa-caret-down"></i></span>

                        </li>
                        <div className={`todo-status `} id={`todo-status-${index}`} style={{ display: 'none' }}>
                            <div className="todo-final-status">
                                {todo.status}
                            </div>
                            <div className="todo-img-box">
                                <img src={todo.img} alt="" />
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>

    )
}
import { useContext, useEffect } from "react"
import UserBaseContext from "../Context/UserBaseContext";


export default function Todo() {
    const userBaseContext = useContext(UserBaseContext);
    const todos = userBaseContext?.todos || [];

    useEffect(() => {
        console.log("Todo Component Mounted");
        console.log("User Base Context:", userBaseContext);
    }, [userBaseContext]);


    return (
        <div className="todo-dairy">
            <h2>Current Todo</h2>




            <div>

                {todos.length === 0 ? <p>No todos available.</p> : todos.map((todo, index) => (
                    <div key={index}>
                        <li className="main-todo" style={{ background: todo.color }}>
                            <span>{todo.title}</span>
                            <span  ><i className="fa-solid fa-caret-down"></i></span>

                        </li>
                        {/* <div className="todo-status">
                            <div className="todo-final-status">
                                {todo.status}
                            </div>
                            <div className="todo-img-box">
                                <img src={todo.img} alt="" />
                            </div>

                        </div> */}
                    </div>
                ))}

            </div>

        </div>

    )
}
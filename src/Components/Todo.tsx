export default function Todo() {
    return (
        <div className="todo-dairy">
            <h2>This is Todo</h2>
            <div>
                <ul>

                    <li className="main-todo">
                        <span>Todo Title</span>
                        <span  ><i className="fa-solid fa-caret-down"></i></span>

                    </li>
                    <div className="todo-status">
                        <div className="todo-final-status">
                            completed
                        </div>
                        <div className="todo-img-box"></div>

                    </div>

                    <li className="main-todo">
                        <span>Todo Title</span>
                        <span  ><i className="fa-solid fa-caret-down"></i></span>

                    </li>
                    <div className="todo-status">
                        <div className="todo-final-status">
                            completed
                        </div>
                        <div className="todo-img-box"></div>

                    </div>

                    <li className="main-todo">
                        <span>Todo Title</span>
                        <span  ><i className="fa-solid fa-caret-down"></i></span>

                    </li>
                    <div className="todo-status">
                        <div className="todo-final-status">
                            completed
                        </div>
                        <div className="todo-img-box"></div>

                    </div>
                </ul>
            </div>
        </div>
    )
}
import { useContext } from "react"
import UserBaseContext from "../Context/UserBaseContext";
import type { Todo } from "../Context/types";
import DateContext from "../Context/DateContext";


export default function Todo() {
    const userBaseContext = useContext(UserBaseContext);
    const currentDate = useContext(DateContext);

    if (!userBaseContext || !currentDate) {
        console.log("Something not found:", { userBaseContext: !!userBaseContext, currentDate });
        return (
            <div className="todo-dairy">
                <h2>Today's Todos</h2>
                <div>
                    <p>No todos available.</p>
                </div>
            </div>
        );
    }

    console.log("Current Date:", currentDate);
    console.log("All Diaries:", userBaseContext.diaries.map(d => ({ id: d.id, date: d.date })));

    // Try to find diary by id first, then by date as fallback
    const diaryEntry = userBaseContext.diaries.find(diary => 
        diary.id === currentDate || diary.date === currentDate
    );
    
    console.log("Found Diary Entry:", diaryEntry);
    
    const todos = diaryEntry?.todos || [];

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
    console.log("Todos for today:", todos);

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
                                <div className="todo-img-box">
                                    <img src={todo.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

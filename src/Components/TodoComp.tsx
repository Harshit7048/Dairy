import React, { useContext, type ReactEventHandler } from "react";
import type { Todo } from "../Context/types";
import UserBaseContext from "../Context/UserBaseContext";
import DateContext from "../Context/DateContext";
import heic2any from "heic2any";

interface TodoListProps {
    todos: Todo[];
}

export default function TodoComp(props: TodoListProps) {

    const userBaseContext = useContext(UserBaseContext)

    const user = userBaseContext?.user
    const updateTodoStatus = userBaseContext?.updateTodoStatus;
    const updateHighLightImageTodo = userBaseContext?.updateHighLightImageTodo;



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

    function handleStaus(parentId: string, todoTitile: string) {

        console.log(parentId);
        updateTodoStatus(parentId, todoTitile)
    }

    const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>, todo: Todo) => {
        // const file = e.target.files[0];
        // if (!file) return;

        // const reader = new FileReader();

        // reader.onload = () => {
        //     const dataUrlString = reader.result; // <-- your base64 string

        //     console.log("Image string:", dataUrlString);

        //     // Save this string to your Context data
        //     updateHighLightImageTodo(todo.parentDairyId, todo.title, dataUrlString);
        // };

        // reader.readAsDataURL(file);

        // // reset input to allow re-uploading same file
        // e.target.value = "";
        try {
            const input = e.target;
            const file = input.files?.[0];

            if (!file) return;

            // SECURITY: limit file size (example: 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert("Image must be less than 5MB");
                input.value = "";
                return;
            }

            // Validate file type
            const isHEIC =
                file.type === "image/heic" ||
                file.type === "image/heif" ||
                file.name.toLowerCase().endsWith(".heic") ||
                file.name.toLowerCase().endsWith(".heif");

            let processedFile: File = file;

            // 🔥 Convert HEIC → JPEG for iPhone images
            if (isHEIC) {
                try {
                    const convertedBlob = (await heic2any({
                        blob: file,
                        toType: "image/jpeg",
                        quality: 0.8,
                    })) as Blob;

                    processedFile = new File([convertedBlob], file.name + ".jpg", {
                        type: "image/jpeg",
                    });
                } catch (err) {
                    console.error("HEIC conversion failed:", err);
                    alert("This HEIC image cannot be converted. use a jpeg or png image");
                    input.value = "";
                    return;
                }
            }

            // Convert processed file → base64 string
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;

                if (typeof result !== "string") {
                    console.error("FileReader error: result is not a string");
                    return;
                }

                if (updateHighLightImageTodo) {
                    updateHighLightImageTodo(todo.parentDairyId, todo.title, result);
                }
            };

            reader.readAsDataURL(processedFile);

            // Reset so user can re-select same file
            input.value = "";
        } catch (error) {
            console.error("Image selection failed:", error);
        }
    };

    // console.log("Todos for today:", todos);

    // Safely get todos array with validation
    const todos = Array.isArray(props.todos) ? props.todos : [];
    // console.log(todos);

    return (
        <div className="todo-dairy">
            {/* <h2>Today's Todos</h2> */}
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
                                    <div className="todo-status-info">
                                        {todo.status === "Completed" ? "" : <input type="checkbox" name="updateStatus" id={`todo-status-final${index}`} className="check-box"
                                            onClick={() => handleStaus(todo.parentDairyId, todo.title)}


                                        />}
                                        <span className="todo-st">

                                            {todo.status}
                                        </span>

                                    </div>
                                    <div className="todo-camera">
                                        <i
                                            className="fa-solid fa-camera"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => document.getElementById(`upload-${index}`)?.click()}
                                        ></i>

                                        {/* Hidden input */}
                                        <input
                                            type="file"
                                            id={`upload-${index}`}
                                            accept="image/*"
                                            capture="environment"
                                            style={{ display: "none" }}
                                            onChange={(e) => handleImageSelect(e, todo)}
                                        />

                                        <span>Add Highlight Image</span>
                                    </div>

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




export default function AddTodo() {

    



    return <div className="add-todo">
        <p>Date- 27-11-2-25</p>
        <div className="todo-form">
            <div className="todo-input-box">
                <label htmlFor="todo_title">Title</label>
                <input type="text" name="todo_title" />
            </div>
            <div className="todo-input-box">
                <label htmlFor="todo_date">Date</label>
                <input type="date" name="todo_title" />
            </div>
            <div className="todo-input-box">
                <label htmlFor="todo_color">Colour</label>
                <input type="color" name="todo_title" />
            </div>

        </div>

    </div>
}
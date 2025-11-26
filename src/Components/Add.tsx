import { useState } from "react"

export default function Add() {

    const [sideBtnActive, setSideBtnActive] = useState("btn-deactive")


    return <div className="add-btn-main">

        <div className={`side-btns ${sideBtnActive}`}>
            <div className="top-btn inner-btn">
                Add ToDo
            </div>
            <div className="bottom-btn inner-btn">Add Journal</div>
        </div>

        <div className="add-btn"
            onClick={() => {
                if (sideBtnActive === "btn-deactive") {
                    setSideBtnActive("btn-active")
                } else {
                    setSideBtnActive("btn-deactive")
                }
                console.log(sideBtnActive);
            }}
        >
            +
        </div>

    </div>
}
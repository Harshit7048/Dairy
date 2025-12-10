import { useState } from "react"

import { useContext } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import { useNavigate } from "react-router-dom"

export default function Add() {
    const [sideBtnActive, setSideBtnActive] = useState("btn-deactive")
    const navigate = useNavigate()
    const ctx = useContext(LibraryContext)
    if (!ctx) return null




    return <div className="add-btn-main">

        <div className={`side-btns ${sideBtnActive}`}>
            <div className="top-btn inner-btn"
                onClick={() => {
                    navigate('/add-todo')
                    setSideBtnActive("btn-deactive")
                }
                }>
                Add ToDo
            </div>
            <div className="bottom-btn inner-btn"
                onClick={() => {
                    navigate('/add-dairy')
                    setSideBtnActive("btn-deactive")
                }
                }
            >Add Journal</div>
        </div>

        <div className="add-btn"

        >
            <div className="add-btn-inner-style"
                onClick={() => {
                    if (sideBtnActive === "btn-deactive") {
                        setSideBtnActive("btn-active")
                    } else {
                        setSideBtnActive("btn-deactive")
                    }
                    console.log(sideBtnActive);
                }}
            >+</div>
        </div>

    </div>
}
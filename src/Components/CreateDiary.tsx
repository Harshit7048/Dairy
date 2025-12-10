import UserBaseContext from "../Context/UserBaseContext";
import { useContext, useState } from "react";
import DateContext from "../Context/DateContext";
import React from "react";
import type { Diary } from "../Context/types";

export default function CreateDairy() {
    const currentDate = useContext(DateContext)
    const user = useContext(UserBaseContext)
    const dairy = user?.user?.diaries
    const foundDiary = dairy?.find(ele => ele.id === currentDate);
    const AddDiaryEntry = user?.AddDiaryEntry

    // Move hooks to top-level
    const [title, setTitle] = useState(foundDiary?.title ?? "");
    const [content, setContent] = useState(foundDiary?.content ?? "");
    const [mainImg, setMainImg] = useState(foundDiary?.main_img ?? "");

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [newMainImg, setNewMainImg] = useState("");

    console.log("Diary create Component Mounted");
    console.log(currentDate);

    if (foundDiary) {
        return (
            <div className="create-diary-form">
                <p className="dairy-p">Diary For The Date Already Exist , <span>Edit The Current One</span>
                </p>
                <h2>Edit Diary Entry</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="diary-date">Date</label>
                        <input
                            type="date"
                            id="diary-date"
                            name="diary-date"
                            value={foundDiary.date}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="diary-title">Title</label>
                        <input
                            type="text"
                            id="diary-title"
                            name="diary-title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="diary-content">Content</label>
                        <textarea
                            id="diary-content"
                            name="diary-content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="diary-main-img">Main Image URL</label>
                        <input
                            type="text"
                            id="diary-main-img"
                            name="diary-main-img"
                            value={mainImg}
                            onChange={e => setMainImg(e.target.value)}
                        />
                    </div>
                    {/* You can add a Save/Edit button here later */}
                </form>
                <button>Commit Changes</button>
            </div>
        );
    }


    function handleNewDiaryEntry() {
        if (!currentDate) return

        const newDairy: Diary = {
            date: currentDate,
            content: newContent,
            title: newTitle,
            id: `${currentDate}`

        }
        if (!newDairy) return
        if (AddDiaryEntry) {
            AddDiaryEntry(newDairy);
        }
    }

    // If no diary exists for the current date, show a similar form for creating a new diary
    return (
        <div className="create-diary-form">
            <h2>Create New Diary Entry</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="new-diary-date">Date</label>
                    <input
                        type="date"
                        id="new-diary-date"
                        name="new-diary-date"
                        value={currentDate ?? ""}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-diary-title">Title</label>
                    <input
                        type="text"
                        id="new-diary-title"
                        name="new-diary-title"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-diary-content">Content</label>
                    <textarea
                        id="new-diary-content"
                        name="new-diary-content"
                        value={newContent}
                        onChange={e => setNewContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="new-diary-main-img">Main Image URL</label>
                    <input
                        type="text"
                        id="new-diary-main-img"
                        name="new-diary-main-img"
                        value={newMainImg}
                        onChange={e => setNewMainImg(e.target.value)}
                    />
                </div>
                {/* You can add a Save/Create button here later */}
            </form>
            <button

                onClick={() => handleNewDiaryEntry()}


            >Create Diary</button>
        </div>
    );
}
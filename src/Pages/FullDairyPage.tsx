import { useContext } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import { useParams } from "react-router-dom"

import UserBaseContext from "../Context/UserBaseContext"
import TodoComp from "../Components/TodoComp";
import type { Todo, Diary } from "../Context/types";

export default function FullDairyPage() {
    const userBaseContext = useContext(UserBaseContext);
    const user = userBaseContext?.user;
    const dairyData: Diary[] = user?.diaries || [];
    const { currentId } = useParams();
    const ctx = useContext(LibraryContext)

    if (!ctx) return null

    // Convert string ID to number for comparison, or compare as string if diary.id is string
    const diaryEntry = dairyData.find(item => String(item.id) === String(currentId));

    if (!diaryEntry) {
        return <div className="full-dairy-page">
            <h1>Diary Entry Not Found</h1>
            <p>No entry found with ID: {currentId}</p>
        </div>
    }

    return <div className="full-dairy-page">
        <div className="dairy-page-inside">
            <div className="page-text">
                <h2>{diaryEntry.title}</h2>
                <p>Date: {diaryEntry.date}</p>
                <p>{diaryEntry.content}</p>
            </div>
            {diaryEntry.main_img && <img src={diaryEntry.main_img} alt={diaryEntry.title} />}
        </div>
        <div className="dairy-todos">
            <h2>Todos of The Day</h2>
            <TodoComp todos={diaryEntry.todos ?? []} />
        </div>
    </div>
}
import { useContext } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import { useParams } from "react-router-dom"


type DiaryEntry = {
    id: number
    title: string
    content: string
    date: string
    main_img?: string
}

export default function FullDairyPage() {
    const { currentId } = useParams()
    const ctx = useContext(LibraryContext)

    if (!ctx) return null

    const { data } = ctx
    console.log("Current ID from params:", currentId);

    // Convert string ID to number and find the matching diary entry
    // Type assertion needed because context type doesn't match actual diary data structure
    const diaryEntry = (data as unknown as DiaryEntry[]).find(item => item.id === Number(currentId))
    console.log("Found diary entry:", diaryEntry);

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

    </div>
}
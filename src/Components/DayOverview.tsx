import { useContext } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import { useNavigate } from "react-router-dom"



type DayOverviewProps = {
    id: number
    title: string
    content: string
    date: string
    main_img?: string
}

export default function DayOverview(props: DayOverviewProps) {

    const navigate = useNavigate()
    const ctx = useContext(LibraryContext)
    if (!ctx) return null


    return <div className="day-overview" onClick={() => {

        console.log("Current ID set to:", props.id);
        navigate(`/full-dairy/${props.id}`)
    }}>
        <div className="day-overview-outer">
            <div>
                <span>{props.date}</span>

                <h2>{props.title}</h2>
            </div>
            <div>
                <img src={props.main_img ?? ''} alt="" />
            </div>

        </div>


    </div>
}
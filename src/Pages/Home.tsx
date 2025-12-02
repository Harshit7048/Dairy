import { useContext, useEffect, useState } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import DairyData from "../Assets/BaseData.js"
import DayOverview from "../Components/DayOverview.js"
import Todo from "../Components/Todo.js"
import Quotes from "../Components/Quotes.js"
import UserBaseContext from "../Context/UserBaseContext";
import Calender from "../Components/Calender";



export default function Home() {

    const userBaseContext = useContext(UserBaseContext);
    const dairyData = userBaseContext?.diaries || DairyData;



    const [classCurrent, setClassCurrent] = useState("deactive")

    return <div className="home">
        <h1></h1>
        <Quotes />
        <div className="overall-info">
             
            <Calender/>
        </div>


        <div className="current-day-info">
            <Todo />
        </div>



        <div className="see-prev" onClick={() => {
            if (classCurrent === "deactive") {
                setClassCurrent("active")
            } else {
                setClassCurrent("deactive")
            }
            console.log(classCurrent);
        }}>
            <span>See Previous</span>
            <span  ><i className="fa-solid fa-caret-down"></i></span>
        </div>
        <div className={`prev-entry ${classCurrent}`}  >
            {dairyData.map((diaryEntry, index) => (
                <DayOverview
                    key={index}
                    id={diaryEntry.id}
                    title={diaryEntry.title}
                    content={diaryEntry.content}
                    date={diaryEntry.date}
                    main_img={diaryEntry.main_img}
                />
            ))}
        </div>

    </div>
}
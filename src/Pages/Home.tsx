import { useContext, useEffect, useState } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import DairyData from "../Assets/BaseData.js"
import DayOverview from "../Components/DayOverview.js"
import Todo from "../Components/Todo.js"
import Quotes from "../Components/Quotes.js"


export default function Home() {
    const { data, setDataSet } = useContext(LibraryContext)


    useEffect(() => {
        console.log("Home Component Mounted");

        setDataSet(DairyData);



    }, [data])

    const [classCurrent, setClassCurrent] = useState("deactive")

    return <div className="home">
        <h1></h1>
        <Quotes />
        <div className="overall-info">
            <span><i className="fa-solid fa-calendar"></i></span>
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
            {data && data.map(item => (
                <DayOverview title={item.title} content={item.content} id={item.id} date={item.date} main_img={item.main_img} />
            ))}
        </div>

    </div>
}
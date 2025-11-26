import { useContext, useEffect } from "react"
import { LibraryContext } from "../Context/LibraryContext"
import DairyData from "../Assets/BaseData.js"
import DayOverview from "../Components/DayOverview.js"


export default function Home() {
    const { data, setDataSet } = useContext(LibraryContext)


    useEffect(() => {
        console.log("Home Component Mounted");
        console.log(data);
        setDataSet(DairyData);
        console.log(data);


    }, [data])

    return <div className="home">
        <h1></h1>
        {data && data.map(item => (
            <DayOverview title={item.title} content={item.content} id={item.id} date={item.date} main_img={item.main_img} />
        ))}
    </div>
}
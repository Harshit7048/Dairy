import { useContext, useState } from "react"
import type { Todo, Diary } from "../Context/types.js"

import Quotes from "../Components/Quotes.js"
import UserBaseContext from "../Context/UserBaseContext";
import Calender from "../Components/Calender";
import DateContext from "../Context/DateContext.js"
import TodoComp from "../Components/TodoComp.js"
import DayOverview from "../Components/DayOverview.js";
import Ratings from "../Components/Ratings.js";


export default function Home() {
    const userBaseContext = useContext(UserBaseContext);
    const user = userBaseContext?.user;
    const dairyData = user?.diaries;
    const currentDate = useContext(DateContext);
    const [classCurrent, setClassCurrent] = useState("deactive")

    if (!user || !currentDate) {
        console.log("Something not found:", { user: !!user, currentDate });
        return (
            <div className="todo-dairy">
                <h2>Today's Todos</h2>
                <div>
                    <p>No todos available.</p>
                </div>
            </div>
        );
    }

    const diaryEntry = user.diaries.find((diary: Diary) =>
        diary.id === currentDate || diary.date === currentDate
    );
    // Ensure todosCurrentDay is always a valid array
    const todosCurrentDay: Todo[] = Array.isArray(diaryEntry?.todos) ? diaryEntry.todos : []

    return <div className="home">
        <div className="home-inner">
            <Quotes />

            <div className="ratings-box">
                <Ratings />
            </div>

            <div className="overall-info">
                <Calender />
            </div>

            <div className="current-day-info">
                {todosCurrentDay.length <= 0 ? <h2>No Todos Added Yet</h2> : <h2>Today's Todos</h2>}
                <TodoComp todos={todosCurrentDay} />
            </div>

            <div className="see-prev" onClick={() => {
                if (classCurrent === "deactive") {
                    setClassCurrent("active")
                } else {
                    setClassCurrent("deactive")
                }
                console.log(classCurrent);
            }}>
                <span>Diary Entries</span>
                <span  ><i className="fa-solid fa-caret-down"></i></span>
            </div>
            <div className={`prev-entry ${classCurrent}`}  >
                {dairyData ? dairyData.map((diaryEntry: Diary, index: number) => (
                    <DayOverview
                        key={index}
                        id={(diaryEntry.id)}
                        title={diaryEntry.title}
                        content={diaryEntry.content}
                        date={diaryEntry.date}
                        main_img={diaryEntry.main_img}
                    />
                )) : null}
            </div>

            {/* <ExampleScreen /> */}
        </div>

    </div>
}
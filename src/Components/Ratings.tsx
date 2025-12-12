import { useContext, useEffect, useState } from "react"
import UserBaseContext from "../Context/UserBaseContext";
import DateContext from "../Context/DateContext"

export default function Ratings() {

    const currentDate = useContext(DateContext)
    const userBaseContext = useContext(UserBaseContext);
    const user = userBaseContext?.user;

    const completedCount = user
        ? user.diaries.reduce(
            (acc, diary) =>
                diary.id === currentDate
                    ? acc + (diary.todos ? diary.todos.filter((t) => t.status === "Completed").length : 0)
                    : acc,
            0
        )
        : 0;

    const [rating, setRating] = useState(completedCount);

    console.log(user);
    // useEffect(()=>{
    //   setRating((prev)=>{

    //     })
    // },[user,rating])




    return <div className="ratings">
        <div className="main-rating">
            <div className="inner-rating">
                {rating} / 5
            </div>
        </div>
        <div className="rating-info">
            <div className="status-rating">
                <p>Current Status</p>
                <span>top Tier</span>
                <hr />
                <p>Current Level</p>
                <span>Intermediate</span>

            </div>
        </div>
    </div>
}
import { useEffect, useState } from "react"

export default function Ratings() {

    const [rating, setRating] = useState(4)




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

type DayOverviewProps = {
    id: number
    title: string
    content: string
    date: string
    main_img?: string
}

export default function DayOverview(props: DayOverviewProps) {
    return <div className="day-overview">
        <div className="day-overview-outer">
            <div>
                <span>{props.date}</span>

                <h2>{props.title}</h2>
            </div>
            <div>
                <img src={props.main_img} alt="" />
            </div>

        </div>


    </div>
}
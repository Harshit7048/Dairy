import React, { useEffect } from "react";









export default function Quotes() {

    const [quote, setQuote] = React.useState<string>("");

    useEffect(() => {
        console.log("Quotes Component Mounted");
        // fetch(" https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(res => res.json()).then(dataFinal => {
        //     console.log(dataFinal);
        // }).catch(err => {
        //     console.log(err)
        // })


    }, [])

    return <div className="quotes">
        "The best way to predict the future is to create it." - Peter Drucker
    </div>;
}
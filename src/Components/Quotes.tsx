import React, { useEffect } from "react";









export default function Quotes() {

    const [quote, setQuote] = React.useState<string>("");

    useEffect(() => {
        console.log("Quotes Component Mounted");
        //         fetch(`curl -X GET "https://api.api-ninjas.com/v2/quotes?categories=success,wisdom" \
        //   -H "X-Api-Key: cBRtYlSPMM5yRjjUkvSOzw==vFStpAg8yUc1XmQr"
        // `).then(res => res.json()).then(dataFinal => {
        //             console.log(dataFinal);
        //         }).catch(err => {
        //             console.log(err)
        //         })

        // cBRtYlSPMM5yRjjUkvSOzw==vFStpAg8yUc1XmQr


    }, [])

    return <div className="quotes">
        <span>

            "The best way to predict the future is to create it."
        </span>
        <span className="q-auth">
            - Peter Drucker</span>
    </div>;
}
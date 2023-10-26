import Trivia from "./Trivia"
import { useEffect } from "react"
import { useState } from "react"

function Main() {

    const [triviasData , setTriviasData] = useState([])
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
            .then(res => res.json())
                .then(data => setTriviasData(data.results))
    } , [])

    console.log(triviasData)

    const triviasDataElement = triviasData.map(trivia => {
        return <Trivia 
            key={trivia.correct_answer} 
            question={trivia.question}
            answers={trivia.incorrect_answers}
            />
    })
    return (
        <main>
            {triviasDataElement}
        </main>
    )
}

export default Main
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

    
    const triviasDataElement = triviasData.map(trivia => {
        return <Trivia 
            key={trivia.correct_answer} 
            question={trivia.question}
            incorrectAnswers={trivia.incorrect_answers}
            correctAnswer={trivia.correct_answer}
            />
    })
    return (
        <main>
            {triviasDataElement}
        </main>
    )
}

export default Main
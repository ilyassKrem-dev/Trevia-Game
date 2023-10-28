import Trivia from "./Trivia"
import { useEffect } from "react"
import { useState } from "react"

function Main() {

    const [triviasData , setTriviasData] = useState([])
    const [rightAnswers , setRightAnswers] = useState([])
    const [count , setCount] = useState(0)
    const [show , setShow] = useState(true)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
            .then(res => res.json())
                .then(data => setTriviasData(data.results))
        
    } , [])
    function handleClick() {
        let newCount = 0
        for(let i = 0 ; i < triviasData.length ; i++) {
            const data = triviasData[i]
            for(let j = 0 ; j< rightAnswers.length ; j++) {
                
                const answerdata = rightAnswers[j]
                
                console.log(answerdata.answer)
                if (data.correct_answer===answerdata.answer) {
                    newCount += 1;
                }
            }

        }
        setCount(newCount)
        setShow(true)
    }
    function handleNumRight(question1 , answer) {
        setRightAnswers(prev => {
            const updatedAnswers = prev.map(item => {
                if (item.question === question1) {
                    return {...item,answer:answer}
                } else {
                    return item
                }
            });
            const isQuestionAlreadyAnswered = updatedAnswers.some(
                (item) => item.question === question1
              );
          
              if (!isQuestionAlreadyAnswered) {
                updatedAnswers.push({ question: question1, answer: answer });
              }
          
              return updatedAnswers;
        });
    
    }
   
    const triviasDataElement = triviasData.map(trivia => {
        return <Trivia 
            key={trivia.correct_answer} 
            question={trivia.question}
            incorrectAnswers={trivia.incorrect_answers}
            correctAnswer={trivia.correct_answer}
            updateScore={handleNumRight}
            />
    })
    return (
        <main>
            {show &&<p>{count}/5</p>}
            {triviasDataElement}
            <button onClick={handleClick} className="main--button main--button-text">Check answers</button>
        </main>

    )
}

export default Main
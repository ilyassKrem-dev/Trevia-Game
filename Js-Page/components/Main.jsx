import Trivia from "./Trivia"
import { useState , useEffect } from "react"
import Confetti from 'react-confetti'
import blobimg from "../Images/blobs.svg"
function Main() {

    const [triviasData , setTriviasData] = useState([])
    const [answers , setAnswers] = useState([])
    const [count , setCount] = useState(0)
    const [show , setShow] = useState(false)
    const [darkMode , setDarkMode] = useState(false)
    useEffect(() => {
        fetchNewTriviaData()   
    } , [])
    
    function fetchNewTriviaData() {
        fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
            .then((res) => res.json())
            .then((data) => setTriviasData(data.results));
    }
    function handleClick() {
        let newCount = 0
        for(let i = 0 ; i < triviasData.length ; i++) {
            const data = triviasData[i]
            
            for(let j = 0 ; j< answers.length ; j++) {
                
                const answerdata = answers[j]
                
                
                if (data.correct_answer===answerdata.answer) {
                    newCount += 1;
                    answerdata.correct = true;
                    
                }
            }
            
        }

        setCount(newCount)
        setShow(true)
        if(show) {
            fetchNewTriviaData()
            setShow(false)
        }
        
    }


    function handleNumRight(question1 , answer) {
        

        setAnswers(prev => {
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
                updatedAnswers.push({ question: question1, answer: answer,correct:false });
              }
          
              return updatedAnswers;
        });

    
    }

    function switchDark() {
        setDarkMode(prev => !prev)
    }
    const triviasDataElement = triviasData.map((trivia) => {
        
        return <Trivia 
            key={trivia.correct_answer} 
            question={trivia.question}
            incorrectAnswers={trivia.incorrect_answers}
            correctAnswer={trivia.correct_answer}
            updateScore={handleNumRight}
            show={show}
            darkMode={darkMode}
            />
    })
    return (
        <main className={darkMode ? "dark" : ""}>
            <div className="box">
                <div className="switch-dark-light">
                    <p>Dark</p>
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <div onClick={switchDark} htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </div>
                    <p>Light</p>
                </div>

                {show && count === triviasData.length && <Confetti />}
                {triviasDataElement}
                <div className="main--check">
                    {show &&<p>You scored {count}/{triviasData.length} correct answers</p>}
                    <button onClick={handleClick} className="main--button main--button-text">{show ?"Play again":"Check answers"}</button>
                </div>
            </div>
            
            
            <img className="blob-bot" src={blobimg} alt="" />
        </main>

    )
}

export default Main
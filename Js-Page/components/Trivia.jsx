import { useState ,useEffect } from "react";
import Triviabuttons from "./Triviabuttons";

function Trivia(props) {

    const [incorrectAnswers , setIncorrectAnswers] = useState(props.incorrectAnswers)

    const [correctAnswer , setCorrectAnswer] = useState(props.correctAnswer)

    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    const [selectedAnswer, setSelectedAnswer] = useState();
    
    
   
    useEffect(() => {
        // Create a shuffled array of incorrect and correct 
        const allAnswers = [correctAnswer, ...incorrectAnswers];
        const shuffled = shuffleArray(allAnswers);
        setShuffledAnswers(shuffled);
      }, [correctAnswer, incorrectAnswers]);

    const shuffleArray = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

   function handleClick(answer) {
        if (!props.show) {
            setSelectedAnswer(answer)
            props.updateScore(props.question , answer)
        }   
      
   }
    const answersElement = shuffledAnswers.map((answer,index) => {
        const isCorrect = answer === props.correctAnswer;
        
        return <Triviabuttons
            key={index}
            answer={answer}
            selected={answer === selectedAnswer}
            click={() => handleClick(answer)}
            show={props.show}
            isCorrect={isCorrect}
             />
    })  
    return (
        <div>
            <p className="div--text">
                {props.question}
            </p>
            {answersElement}
            <div className="div--line"></div>
        </div>
    )
}

export default Trivia
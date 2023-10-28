import { useState ,useEffect } from "react";
import Triviabuttons from "./Triviabuttons";




function Trivia(props) {
    const [incorrectAnswers , setIncorrectAnswers] = useState(props.incorrectAnswers)

    const [correctAnswer , setCorrectAnswer] = useState(props.correctAnswer)

    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    const [selectedAnswer, setSelectedAnswer] = useState();
    
    const[count , setCount] = useState(1);
   /* const [rightAnswers , setRightAnswers] = useState([])*/
    useEffect(() => {
        // Create a shuffled array that includes the correct answer and incorrect answers
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

   function handleClick(id) {
        setSelectedAnswer(id)
        props.updateScore(props.question , id)
        
   }
    const answersElement = shuffledAnswers.map(answer => {
        return <Triviabuttons
            key={answer}
            answer={answer}
            selected={answer === selectedAnswer}
            click={() => handleClick(answer)}
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
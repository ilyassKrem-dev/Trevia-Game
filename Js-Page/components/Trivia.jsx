import { useState } from "react";
import Triviabuttons from "./Triviabuttons";




function Trivia(props) {
    const [answers , setAnswers] = useState(props.answers)
    console.log(answers)
    const [color , setColor] = useState(false)
    
    const answersElement = answers.map(answer => {
        return <Triviabuttons
            key={answer}
            answer={answer}
            change={color}
            click={() => handleclick(answer)} />
    })
    return (
        <div>
            <p className="main--text">
                {props.question}
            </p>
            {answersElement}
            <div className="main--line"></div>
        </div>
    )
}

export default Trivia
import { useState } from "react"



function Triviabuttons(props) {
    const [change , setChange] = useState(props.change)
    const styles = {
        backgroundColor: change ? "#D6DBF5" : ""
    }
    function click() {
        setChange(prev => !prev)
    }
    return (<button style={styles} onClick={click}  className="main--button but-text">{props.answer}</button>)
}

export default Triviabuttons
import { useState } from "react"



function Triviabuttons(props) {
    /*const styles = {
        backgroundColor: props.change ? "#D6DBF5" : ""
    }*/
    const styles = {
        backgroundColor: props.selected ? "#D6DBF5" : "",
      };
    
    return (<button style={styles} onClick={props.click}  className="button but-text">{props.answer}</button>)
}

export default Triviabuttons
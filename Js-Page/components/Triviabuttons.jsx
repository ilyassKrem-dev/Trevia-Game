import { useState } from "react"



function Triviabuttons(props) {
    /*const styles = {
        backgroundColor: props.change ? "#D6DBF5" : ""
    }*/
    const styles = {

    }
    if(props.show) {
        if (props.selected) {
            styles.backgroundColor = props.isCorrect ? "#94D7A2" : "#F8BCBC";
            styles.opacity = props.isCorrect ? 1 : 0.5;
            styles.border = props.selected ? "none" : ""
        } else {
            styles.opacity = 0.5
            
        }
        
    }  else {
        styles.backgroundColor = props.selected ? "#D6DBF5" : "";
        styles.border = props.selected ? "none" : ""
    }   
    
    return (<button style={styles} onClick={props.click}  className="button but-text">{props.answer}</button>)
}

export default Triviabuttons
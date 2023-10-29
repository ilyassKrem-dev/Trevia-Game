
function Triviabuttons(props) {
    const styles = {
        
    }
    if(props.show) {
        if(props.isCorrect) {

            styles.backgroundColor = "#f5a721c7"; 
            styles.opacity=  1;
            styles.border = "none"
            styles.color= "black"

        } else {

            styles.backgroundColor = ""
            styles.opacity=  0.5;

        }
        if (props.selected) {

            styles.backgroundColor = props.isCorrect ? "#94D7A2" : "#F8BCBC";
            styles.opacity = props.isCorrect ? 1 : 0.5;
            styles.border = props.selected ? "none" : ""

        } 
        
    }  else {

        styles.backgroundColor = props.selected && props.darkMode ? "rgba(50, 50, 50, 1)" :props.selected ? "#D6DBF5" : "";
        styles.border = props.selected ? "none" : ""
        styles.color = props.darkMode&&props.selected && "white"

    }   
    return (<button style={styles} onClick={props.click}  className="button but-text">{props.answer}</button>)
}

export default Triviabuttons
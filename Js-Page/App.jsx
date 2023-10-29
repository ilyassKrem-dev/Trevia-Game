import { useState } from "react"
import Main from "./components/Main"


function App() {

    const [start , setStart] = useState(false)

    function handleClick() {
      setStart(true)
    }
    return (
      <div>
        <div className="blobs">
          <svg xmlns="http://www.w3.org/2000/svg" width="126" height="131" viewBox="0 0 126 131" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M63.4095 71.3947C35.1213 40.8508 -2.68211 11.7816 1.17274 -29.6933C5.43941 -75.599 39.854 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.538 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z" fill="#FFFAD1"/>
          </svg>
        </div>
        
         {start&&<Main />}
         {!start&&<div className="start-quiz">
            <h1>Quizzical</h1>
            <p>Click the button to start quiz</p> 
            <button onClick={handleClick}>Start quiz</button>
         </div>}
          {!start && <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="148" height="118" viewBox="0 0 148 118" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
            </svg>
          </div>}
      </div>
    )
  }

export default App
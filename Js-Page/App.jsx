import Main from "./components/Main"
import blobimg from "./Images/blobs.svg"

function App() {

    

    return (
      <div>
        <div className="blobs">
          <svg xmlns="http://www.w3.org/2000/svg" width="126" height="131" viewBox="0 0 126 131" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M63.4095 71.3947C35.1213 40.8508 -2.68211 11.7816 1.17274 -29.6933C5.43941 -75.599 39.854 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.538 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z" fill="#FFFAD1"/>
          </svg>
        </div>

         <Main />
         
         <img className="blob-bot" src={blobimg} alt="" />
      </div>
    )
  }

export default App
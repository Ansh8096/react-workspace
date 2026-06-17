import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(1);
  // const [multipliedNo, setMultipliedNo] = useState(1);

  // we can avoid using useState for the multiplied number...
  // we can handle the multiplied number logic, when the 'app' component re-renders because of 'useState()'...
  let multipliedNo = num*5;

  const multiplyValue = ()=>{
    setNum(num + 1);
  }

  return (
    <>
      <div>
        <h1> Interview question1:</h1>
        <br /> <br />

        <h1>Main Value: {num}</h1> 
        
        <p>multipliedNo: {multipliedNo}</p>
        
        <button onClick={multiplyValue}>
          multiply number
        </button>
      
      </div>
    </>
  )
}

export default App

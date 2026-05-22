import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  let [cnt, setCnt] = useState(5);

  const incrementCnt = ()=>{
    // cnt ++;
    if(cnt + 1 <= 20) setCnt(cnt+1);
  }


  const incrementCntBy5 = ()=>{
    if(cnt + 5 > 20) return; 
    setCnt(prevCnt => prevCnt + 1);
  }

  const decrementCnt = ()=>{
    if(cnt - 1 >= 0) setCnt(cnt-1);
  }

  return (
    <>
    <h1>Counter Project</h1> 
    <br />
    <h2>Counter Value: {cnt}</h2>
    <br />
    <button onClick={incrementCnt}>Add count</button>
    <br />
    <button onClick={decrementCnt}>Remove count</button>
    <br /> <br /> <br />
    <button onClick={incrementCntBy5}>Increment count By 5</button>
    </>
  )
}

export default App

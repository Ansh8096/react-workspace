import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // CallBack() = used when we want to run function only once (used mainly f0r optimization)
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+~}><{?/";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(ch); 
    }

    setPassword(pass);

  },[length,setPassword,numberAllowed,charAllowed])  


  // useEffect() = used when we want to run code after render (used mainly for side effects)
  // here we are using useEffect() to run the passwordGenerator function...
  useEffect(()=>{
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])


  // using useRef...
  const passWordRef = useRef(null); 

  const copyText = ()=>{
    // here we are using passwordRef to improve user experience...
    passWordRef.current?.select();
    // passWordRef.current?.setSelectionRange(0,3); // it is used to select the specific portion of the password...
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-center text-white my-3 '>
        Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder='Password'
              readOnly
              ref={passWordRef}
          /> 
          <button className='bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 active:scale-95 transition duration-150'
          onClick={copyText}>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={50}
            value={length}
            onChange={(e)=>setLength(e.target.value)} // here we are changing the value of length using setLenght()... 
            className='cursor-pointer'/> 
            <label className='text-orange-500'>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed} // default value
            onChange={()=> setNumberAllowed(prev => !prev)} // here we are reversing the current numberAllowed value...
            />
            <label className='text-orange-500'>Numbers</label>
          </div>
         
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed} // default value
            onChange={()=> setCharAllowed(prev => !prev)} // here we are reversing the current characterAllowed value...
            />
            <label className='text-orange-500'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

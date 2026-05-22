import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import Card2 from './components/Card2.jsx'


let obj = {
  name: "Verma",
  age: "21",
  sex: "Male"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card userName = "Ansh" price = "10.00" />
    <Card2 userName = "professor"  price = "10.00"/>
    <Card userName = "Verma" myData = {obj}/>
    <Card2 userName = "devil"/>
    <Card userName = "MJ" price = "12"/>
    <Card2 userName= "Rachel" price='150'> </Card2>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyFunc(){
  return(
    <>
    <div color='red' >My custom Function</div>
    </>
  )
}

// We can't use this directly because the default react params might be different... 
/* 
var reactElement = {
    type : 'a',
    props: {
        href : 'https://github.com/Ansh8096',
        target : '_blank'
    },
    children: 'Click me to visit github'
};
*/


// version 2: (creating the react element from React)
const anotherUser = 'Google';
const reactElement = React.createElement(
  'a',
  {href: 'https://github.com/Ansh8096',target: '_blank'},
  'Click me to visit github',
  anotherUser // once the entire tree is generated, then the available variables are injected
)

// using the variable in the render() function. 
const reactElement2 = (
  <a href="https://github.com/Ansh8096" target="_blank"> Click me to visit github</a> 
);

createRoot(document.getElementById('root')).render(
  reactElement
)
 
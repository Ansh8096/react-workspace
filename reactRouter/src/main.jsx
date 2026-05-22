import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Contact, User, Github, GithubInfoLoader } from './components/Index.js'


// FIRST METHOD TO CREATE THE ROUTER:->
// 'createBrowserRouter' - Creates all application routes (Think of it as: Route Configuration System)
// const router = createBrowserRouter([
//   {
//     path: "/", // Root URL (like: localhost:5173)
//     element: <Layout/>, // When user visits /, React first loads Layout.
//     children: [ // Children Routes , This works using: <Outlet /> inside Layout.jsx.
//       {
//         // Home Route
//         path: "",  // Empty path means: default child route
//         element: <Home/>
//       },
//       {
//         // About Route
//         path: "about",
//         element: <About/>
//       }, 
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// SECOND METHOD TO CREATE THE ROUTER:->
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:userId" element={<User/>} />
      <Route 
        loader = {GithubInfoLoader}
        path="github" 
        element={<Github/>} 
      />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider Injects routing into the entire app. Without this: Link, NavLink, Outlet, useNavigate, useParams.*/}
    <RouterProvider router={router} /> 
    
  </StrictMode>,
)

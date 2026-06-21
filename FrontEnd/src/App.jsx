import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const customReactquery = (urlPath)=>{
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    // ()() -> It is called an Immediately Invoked Function Expression (IIFE).
    // The first '()' is used to create async function in it...
    // The final '()' executes the function immediately...
    (async()=> {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get(urlPath);
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log("An error occurred: ", error);
        setError(true);
      } finally{
        setLoading(false);
      } 
    }) ()
    
  }, [])

  return [loading, error, books];
}

function App() {

  // const [loading, error, books] = customReactquery('/api/books')

  const [book, setBook] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("Title one");

  useEffect(()=>{
    const controller = new AbortController()
    ;(async()=> {
      try {
        // const controller = new AbortController();
        setLoading(true);
        setError(false);
        const res = await axios.get('/api/books/' + search, {
          // It cancels the previous requests, if the same url is hitting again...
          // But it sends that requests to the catch block, so we need to handle that requests there...
          signal: controller.signal 
        });
        console.log(res.data);
        setBook([res.data]);
      
      } catch (error) {

        // handling the requests that are cancelled...
        if(axios.isCancel(error)){
          console.log("Request cancelled: ", error.message);
          return;
        }
        console.log("An error occurred: ", error);
        setError(true);

      } finally{
        setLoading(false);

        // cleanup (removes the previous requests data                                                     ll)
        return ()=>{
          controller.abort();
        }
      } 
    }) ()
    
  }, [search])

  if(error){
    return <h1>Something went wrong...</h1>
  }

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Books project Frontend:</h1>
      <h2>Total Books: {book.length}</h2>

      <input type="text" name="title" id="title" 
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      />

      {book.length && <div>
        <h3>Book Data: </h3>
        <p>Title: {book[0].title}</p>
        <p>Author: {book[0].author}</p>
        <p>Category: {book[0].category}</p>
        </div>
      }
    </>
  )
}

export default App

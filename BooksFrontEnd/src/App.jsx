import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    // here proxy (from vite.config) will be automatically appended...
    axios.get('/api/books')
    .then((response) => setBooks(response.data))
    .catch((error)=> console.log(error)
    );
  })

  return (
    <>
      <h1> Books:</h1>
      <p>Total books: {books.length}</p>

      {books.length &&
        books.map((book)=>{
        return <div key={book.title}>
          <br />
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p> {book.category}</p>
          <br />
        </div>
      })}
    
    </>
  )
}

export default App

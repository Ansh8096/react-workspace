import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/Index'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((prev) =>  [...prev, { id:Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo)=>{
    // it will update the todo it its id is equal to the given id...
    setTodos((prev) => prev.map((currTodo) => (currTodo.id === id ? todo : currTodo) )
    )
  }

  const deleteTodo = (id)=>{
    // it will not collect the todo that has id equal to given id...
    setTodos((prev) => prev.filter((currTodo) => (currTodo.id !== id) ))
  }
  
  const toggleComplete = (id) =>{
    // In this after finding the todo, we just toggle its 'completed' field...
    setTodos((prev) => 
      prev.map( (currTodo) => (currTodo.id === id) ? {...currTodo , completed: !currTodo.completed}  : currTodo))
  }

  // Fetching the 'Todos' from the local storage...
  useEffect(()=>{
    const existingTodos = JSON.parse(localStorage.getItem("todos"));

    if(existingTodos && existingTodos.length >0 ){
      setTodos(existingTodos);
    }
  }, [])
  
  // Storing the 'Todos' into local storage...
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <TodoProvider value ={{todos, addTodo, updateTodo, toggleComplete, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              
              <div className="mb-4">
                  {/* Todo form goes here */} 

                  <TodoForm/>
              </div>
              
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}

                  {todos.map((currTodo) => (
                    <div key = {currTodo.id} className='w-full'>
                   <TodoItem todo={currTodo}/>
                   </div>)
                  )}
                  
              </div>
          
          </div>
      </div>    
    </TodoProvider>
  )
}

export default App

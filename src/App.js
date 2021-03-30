import React, {useEffect, useState} from 'react';
import './App.css';
//import form 
import Form from './components/form';
import List from './components/list';



function App() {
 
  const [inputText , setInputText] = useState(" ");
  const   [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredState, setFilteredTodos] = useState([]); 

  useEffect(()=> {
    
  const filteredHandler = () =>{
      switch(status){
        case "completed":
          setFilteredTodos(todos.filter((todo)=> todo.completed === true));
          break;
        case "incomplete":
          setFilteredTodos(todos.filter((todo)=> todo.completed===false));
          break;
        default :
          setFilteredTodos(todos);
          break;
      }
    }
    filteredHandler();
  }, [todos, status]);

 



  return (
    <div className="App">
      <header>
        <h1> To-do list!  </h1>
      </header>
      <Form 
      inputText={inputText} 
      todos = {todos}
      setTodos = {setTodos} 
      setInputText={setInputText}
      setStatus = {setStatus}
      
      />
      <List filteredState ={filteredState}  todos ={todos} setTodos={setTodos}/> 
    </div>
  );
}

export default App;

import React, { Component} from 'react';
import Todo from './todo';


const List = ({todos, setTodos, filteredState}) =>{
    // console.log(filteredState);
    return(
        <div className ="do-list">
            <ul className="todo-item-wrap">
            { filteredState.map((todo) => (
               <Todo 
               todos ={todos} 
               setTodos={setTodos} 
               text ={todo.text} 
               todo={todo} 
               key={todo.id}/>
           ))}
            </ul>
        </div>

        );
}


export default List;
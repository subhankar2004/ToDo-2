import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const initialtodoItems=[
    // {
    //   name:"Buy milk",
    //   date:"4/10/2023",
    // },
    // {
    //   name:"Go To college",
    //   date:"5/10/2023",
    // },
    // {
    //   name:"watch a movie",
    //   date:"6/10/2023",
    // },
  ];

  const [todoItems,setTodoItems]=useState(initialtodoItems);
  const handleNewItem = (itemName,itemDueDate)=>{
    
    const newTodoItems=[...todoItems,{name:itemName,
      date:itemDueDate},];
      setTodoItems(newTodoItems);
  };

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems= todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItems);
   
  }

  

  return <>
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
     
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
      {todoItems.length === 0 ? <WelcomeMessage /> : null}
      
    </center>
    </>
  
}

export default App;

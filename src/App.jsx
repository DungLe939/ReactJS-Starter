import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import Img from './assets/react.svg'
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Hoi dan it"}
  ]);
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // Ham thuc hien add vao todoList
  const addNewTodo = (name) => {
    const data = {
      id: randomIntFromInterval(1, 100),
      name: name
    }
    setTodoList([...todoList, data]);
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title"><h1>Todo list</h1></div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          todoList = {todoList}
        />
      </div>
      <div className="todo-Logo">
        <img src={Img} />
      </div>
    </>
  );
}


export default App;
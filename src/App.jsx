import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import Img from './assets/react.svg'

const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title"><h1>Todo list</h1></div>
        <TodoNew />
        <TodoData />
        <div className="todo-Logo">
          <img src={Img} />
        </div>
      </div>
    </>
  );
}


export default App;
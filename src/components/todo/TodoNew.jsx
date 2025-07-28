import { useState } from "react";
const TodoNew = (props) => {
    const [nameUser, setNameUser] = useState('nameUser');
    const handleOnChange = (event) => {
        setNameUser(event);
    }
    const handleClick = (name) => {
        //Update name
        props.addNewTodo(name);
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button 
                onClick={() => handleClick(nameUser)}
            >Add</button>
        </div>
    );
}
export default TodoNew;
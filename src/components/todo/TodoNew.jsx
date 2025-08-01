import { useState } from "react";
const TodoNew = (props) => {
    const [nameUser, setNameUser] = useState('');
    const handleOnChange = (event) => {
        setNameUser(event);
    }
    const handleClick = (name) => {
        //Update name
        props.addNewTodo(name);
        setNameUser('');
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={nameUser}
            />
            <button 
                onClick={() => {handleClick(nameUser);}}
            >Add</button>
        </div>
    );
}
export default TodoNew;
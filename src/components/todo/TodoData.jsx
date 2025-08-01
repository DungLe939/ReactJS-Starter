const TodoData = (props) => {
    const {todoList, setTodoList} = props;
    const handleDelete = (id) => {
        const newList = todoList.filter(todoItem => todoItem.id!==id);
        setTodoList(newList);
    }
    return (
        <div className="todo-data">
                {todoList.map((name) => {
                    return (
                    <div className="row" key={name.id}>
                        <div>{name.name}</div>
                        <button 
                        className="btn"
                        onClick={() => handleDelete(name.id)}
                        >Delete</button>
                    </div>
                );
                })}
        </div>
    );
}

export default TodoData;

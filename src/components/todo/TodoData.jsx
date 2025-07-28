const TodoData = (props) => {
    return (
        <div className="todo-data">
            <div>My name is Dung le</div>
            <div>Learning React</div>
            <div>Watch Youtube</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}

export default TodoData;

const TasksItem = ({todo, onChange, onDelete, onEdit}) => {
    return (
        <div>
            <label>
                <input type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => { 
                        debugger
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }}/>
                { todo.name }
            </label>
            <button onClick={() => {
                onEdit(todo);
                }}>
                Edit Save
            </button> 
            <button onClick={() => {
                onDelete(todo);
                }}>
                X
            </button> 
        </div>
    )
}

export default TasksItem;
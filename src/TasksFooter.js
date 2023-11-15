const TasksFooter = ({ todos, onCompletedClear }) => {
    const completedLength = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <span>
                {completedLength} / {todos.length} Completed
            </span>  
            <button onClick={onCompletedClear}>
                Clear
            </button>
        </div>
    )
}

export default TasksFooter;
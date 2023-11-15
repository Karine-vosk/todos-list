import TasksItem from "./TasksItem";

const TasksList = ({ todos, onChange, onDelete }) => {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TasksItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete}/>
                    )
                })
            }
        </div >
    )
}

export default TasksList;
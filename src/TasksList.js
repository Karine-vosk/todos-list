import TasksItem from "./TasksItem";

const TasksList = ({ tasks, onChange, onDelete }) => {
    return (
        <div>
            {
                tasks.map((task) => {
                    return (
                        <TasksItem key={task.id} task={task} onChange={onChange} onDelete={onDelete}/>
                    )
                })
            }
        </div >
    )
}

export default TasksList;

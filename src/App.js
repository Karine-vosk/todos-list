import { Card, Col, Row } from 'antd';
import './App.css';
import TasksFooter from './TasksFooter';
import TasksForm from './TasksForm';
import TasksList from './TasksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {selectTasks, addTask, deleteTask, onChangeTask, completedTask} from './app/features/task/tasksSlice';

function App() {
  const tasksList = useSelector(selectTasks);

 const dispatch = useDispatch();

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Card title="Tasks List" style={{ width: 500 }}>
            <TasksForm  onAddText={(task) => {
    debugger;
    console.log("Callback Values:", task.title, task.description, task.deadline);
    dispatch(addTask({task }));
}} />
            <TasksList tasks={tasksList}
              onChange={(newTask) => {
                dispatch(onChangeTask({id: newTask.id, isCompleted: newTask.isCompleted}));
              }}
              onDelete={(task) => {
                dispatch(deleteTask({id: task.id}));
            }} 
            />
            <TasksFooter tasks={tasksList}
              onCompletedClear={() => {
                dispatch(completedTask());
            }}
            />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;

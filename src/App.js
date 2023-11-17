import { Card, Col, Row } from 'antd';
import './App.css';
import TasksFooter from './TasksFooter';
import TasksForm from './TasksForm';
import TasksList from './TasksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {selectTasks} from './app/features/task/taskSlice';
import {addTask, updateTask, deleteTask, markCompleted} from './app/features/task/actionCreators';

function App() {

 const tasksList = useSelector(selectTasks);

 const dispatch = useDispatch();


  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Card title="Tasks List" style={{ width: 500 }}>
            <TasksForm onAddText={(title) => {
              dispatch(addTask(title));
            }} />
            <TasksList tasks={tasksList}
              onChange={(newTask) => {
                dispatch(updateTask(newTask.id, newTask.isCompleted));
              }}
              onDelete={(task) => {
                dispatch(deleteTask(task.id));
              }} />
            <TasksFooter tasks={tasksList}
              onCompletedClear={() => {
                dispatch(markCompleted());
              }} />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;

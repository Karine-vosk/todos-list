import './App.css';
import { useState } from 'react';
import TasksFooter from './TasksFooter';
import TasksForm from './TasksForm';
import TasksList from './TasksList';
import { Col, Row, Card } from 'antd';


function App() {
  const tasksList = [
    {
      id: 1,
      title: 'ReactJs',
      description: 'Optional field',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Angular',
      description: 'Optional field',
      isCompleted: false
    },
    {
      id: 3,
      title: 'VueJs',
      description: 'Optional field',
      isCompleted: false
    },
  ];
  const [todos, setTodos] = useState(tasksList);

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Card title="Tasks List" style={{ width: 500 }}>
            <TasksForm onAddText={(text) => {

              setTodos(
                [...todos,
                {
                  id: Math.random(),
                  title: text,
                  isCompleted: false
                }
                ]
              )
            }} />
            <TasksList todos={todos}
              onChange={(newTodo) => {

                setTodos(todos.map(todo => {
                  if (todo.id === newTodo.id) {
                    return newTodo;
                  }
                  return todo;
                })
                )
                console.log(todos);
              }}
              onDelete={(todo) => {
                setTodos(todos.filter(item => {
                  return item.id !== todo.id
                }))
              }} />
            <TasksFooter todos={todos}
              onCompletedClear={() => {
                setTodos(
                  todos.filter(todo => !todo.isCompleted)
                )
              }} />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;

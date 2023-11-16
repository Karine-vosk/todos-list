import { Card, Col, Row } from 'antd';
import { useReducer, useState } from 'react';
import './App.css';
import TasksFooter from './TasksFooter';
import TasksForm from './TasksForm';
import TasksList from './TasksList';

function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        title: action.payload.title,
        isCompleted: false
      }
    ];
  } else if (action.type === 'delete') {
    return state.filter(task => {
      return task.id !== action.payload.id;
    });
  }
  else if (action.type === 'onChange') {
     return state.map(task => {
      if (task.id === action.payload.id) {
        console.log(task)
        return { ...task, isCompleted: action.payload.isCompleted };
      }
      return task;
    });
  } else if (action.type === 'completed') {
    console.log(state);

    return state.filter(task => !task.isCompleted);
  }

}

function useReducerCustom (reducer, initialState) {

}

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
  const [tasks, dispatch] = useReducer(reducer, tasksList);

  //useState
  const [tasks2, setTasks] = useState(tasksList);

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Card title="Tasks List" style={{ width: 500 }}>
            <TasksForm onAddText={(title) => {
              dispatch({
                type: 'add',
                payload: {
                  title: title
                }
              });

              // setTasks(
              //   [...tasks,
              //   {
              //     id: Math.random(),
              //     title: text,
              //     isCompleted: false
              //   }
              //   ]
              // )
            }} />
            <TasksList tasks={tasks}
              onChange={(newTask) => {
                dispatch({
                  type: 'onChange',
                  payload: {
                    id: newTask.id,
                    isCompleted: newTask.isCompleted
                  }
                });
                // setTasks(tasks2.map(task => {
                //   if (task.id === newTask.id) {
                //     return newTask;
                //   }
                //   return task;
                // })
                // );

              }}
              onDelete={(task) => {
                dispatch({
                  type: 'delete',
                  payload: {
                    id: task.id
                  }
                });
                // setTasks(task.filter(item => {
                //   return item.id !== task.id;
                // }));
              }} />
            <TasksFooter tasks={tasks}
              onCompletedClear={() => {
                dispatch({
                  type: 'completed'
                });
                // setTasks(
                //   tasks.filter(task => !task.isCompleted)
                // );
              }} />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default App;

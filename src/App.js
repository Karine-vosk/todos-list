import './App.css';
import { useState } from 'react';
import TodoFooter from './TasksFooter';
import TodoHeader from './TasksForm';
import TodoList from './TasksList';

function App() {
  const todoList = [
    {
      id: 1,
      name: 'ReactJs',
      isCompleted: false
    },
    {
      id: 2,
      name: 'Angular',
      isCompleted: false
    },
    {
      id: 3,
      name: 'VueJs',
      isCompleted: false
    },
    {
      id: 4,
      name: 'Typescript',
      isCompleted: false
    }
  ];
  const [todos, setTodos] = useState(todoList);

  return (
    <div className="App">
      <TodoHeader onAddText={(text) => {
        setTodos(
         [ ...todos,
          {
            id: Math.random(),
            name: text,
            isCompleted: false
            }
          ]
        )
      }}/>
      <TodoList todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map(todo => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          })
          )
        }}
        onDelete={(todo) => {
          setTodos(todos.filter(item => {
            return item.id !== todo.id
          }))
        }}/>
      <TodoFooter todos={todos}
        onCompletedClear={() => {
          setTodos(
            todos.filter(todo => !todo.isCompleted)
          )
        }}/>
    </div>
  );
}

export default App;

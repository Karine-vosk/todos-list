import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'ReactJs',
    description: 'Optional field',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Angular',
    description: 'Optional field',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'VueJs',
    description: 'Optional field',
    isCompleted: false,
  },
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Math.random(),
        title: action.payload.title,
        description: action.payload.description || 'Optional field',
        isCompleted: false,
      });
    },
    deleteTask: (state, action) => {
      // Use filter with assignment to update the state
      return state.filter(task => task.id !== action.payload.id);
    },
    onChangeTask: (state, action) => {
      // Use map with assignment to update the state
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, isCompleted: action.payload.isCompleted }
          : task
      );
    },
    completedTask: (state, action) => {
      // Use filter with assignment to update the state
      return state.filter(task => !task.isCompleted);
    },
  },
});

console.log('Initial state:', initialState);

export const { addTask, deleteTask, onChangeTask, completedTask } = tasksSlice.actions;

export const selectTasks = (state) => { 
  return state.tasks;
};


export default tasksSlice.reducer; // Export the reducer as default

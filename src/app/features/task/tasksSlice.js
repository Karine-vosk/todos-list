import { createSlice } from '@reduxjs/toolkit';

const initialState =
{
  tasks: [
    {
      id: 1,
      title: 'ReactJs',
      description: '',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Angular',
      description: '',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'VueJs',
      description: 'Optional field',
      isCompleted: false,
    },
  ],
  drafts: []
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Math.random(),
        title: action.payload.task.title,
        description: action.payload.task.description,
        deadline: action.payload.task.deadline,
        isCompleted: false,
      });
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const deletedTask = state.tasks.find(task => task.id === id);
      if (deletedTask) {
        state.drafts.push(deletedTask);
        state.tasks = state.tasks.filter(task => task.id !== id);
      }
    },
    updateTask: (state, action) => {
      const { id, isCompleted, title } = action.payload;

      state.tasks = state.tasks.map(task =>
        task.id === id
          ? { ...task, isCompleted, title }
          : task
      );
    },
    completedTask: (state, action) => {
      const deletedTasks = state.tasks.filter(task => {
        return task.isCompleted
      });
      state.tasks = state.tasks.filter(task => !task.isCompleted);
      state.drafts.push(...deletedTasks);
    },
    restoreDeletedTask: (state, action) => {
      const { id } = action.payload;
      const restoredTask = state.drafts.find(task => task.id === id);
      if (restoredTask) {
        state.tasks.push(restoredTask);
        state.drafts = state.drafts.filter(task => task.id !== id);
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, completedTask, restoreDeletedTask } = tasksSlice.actions;
export const selectTasks = (state) =>  state.tasks.tasks;
export const selectDeletedTasks = state => state.tasks.drafts;

export default tasksSlice.reducer; 

import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/task/tasksSlice';
import TasksFormSlice from './features/task/tasksFormSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    tasksForm: TasksFormSlice
  },
});

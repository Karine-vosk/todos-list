import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    description: '',
    deadline: ''
};

const TasksFormSlice = createSlice({
    name: 'tasksForm',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload;
        },
        changeDescription: (state, action) => {
            state.description = action.payload;
        },
        changeDeadline: (state, action) => {
            state.deadline = action.payload;
        },
        resetForm: (state) => {
            state.title = '';
            state.description = '';
            state.deadline = '';
        },
    }
});

export const { changeTitle, changeDescription, changeDeadline, resetForm } = TasksFormSlice.actions;
export const selectFormsField = (state) => state.tasksForm;

export default TasksFormSlice.reducer;



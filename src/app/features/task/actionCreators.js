// Action Types
const ADD_TASK = 'add';
const UPDATE_TASK = 'onChange';
const DELETE_TASK = 'delete';
const MARK_COMPLETED = 'completed';

// Action Creators
export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    title,
  },
});

export const updateTask = (id, isCompleted) => ({
  type: UPDATE_TASK,
  payload: {
    id,
    isCompleted,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const markCompleted = () => ({
  type: MARK_COMPLETED,
});



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

export const tasksReducer = ((state = tasksList, action) => {
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
  } else if (action.type === 'onChange') {
    return state.map(task => {
      if (task.id === action.payload.id) {
        console.log(task);
        return { ...task, isCompleted: action.payload.isCompleted };
      }
      return task;
    });
  } else if (action.type === 'completed') {
    console.log(state);

    return state.filter(task => !task.isCompleted);
  }
  return state;
});


export function selectTasks(state) {
  return state.tasksList;
}
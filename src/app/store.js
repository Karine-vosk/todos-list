import {createStore, combineReducers} from 'redux';
import {tasksReducer} from './features/task/taskSlice';


const rootReducer = combineReducers({
  tasksList: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
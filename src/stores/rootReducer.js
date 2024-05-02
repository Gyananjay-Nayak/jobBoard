import { combineReducers } from 'redux';
import Jobs from './jobs/jobReducer';

const rootReducer = combineReducers({ Jobs });
export default rootReducer;

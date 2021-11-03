import { combineReducers } from 'redux';
import { reducer1 } from './reducer1';
export const rootReducer = combineReducers({
	city: reducer1,
});

import { combineReducers } from 'redux';
import todos from './todo.js';
import visibilityFilter from './visibilityFilter.js';

const todoApp = combineReducers({
	todos: todos,
	visibilityFilter: visibilityFilter
});

export default todoApp;

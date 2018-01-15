import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Filter from './Filter';

const App = () => (
	<div>
		<AddTodo />
		<Filter />
		<VisibleTodoList />
	</div>
);

export default App;

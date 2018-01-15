import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../selectors';
import TodoList from '../components/TodoList';

const mapSateToProps = state => {
	return {
		todos: getVisibleTodos(state)
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id));
		}
	};
}

const VisibleTodoList = connect(
	mapSateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
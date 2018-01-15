import React from 'react';
import PropTypes from 'prop-types'; // TODO: use typescript

import '../styles/components/Todo.css'

const Todo = ({ onClick, completed, text }) => (
	<div
		className="Todo"
		onClick={onClick}
		style={ {
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text}
	</div>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;
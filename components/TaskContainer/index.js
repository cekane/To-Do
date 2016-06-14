import React from 'react'

import { tc } from './TaskContainer.scss'
import { TaskContainerHeader } from '../TaskContainerHeader'
import { Tasks } from '../Tasks'
import { connect } from 'react-redux'

export class TaskContainer extends React.Component {
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className={ tc }>
				<TaskContainerHeader removeTask={this.props.removeTask}></TaskContainerHeader>
				{
					this.props.todos.map(function (todo, i) {
						console.log("Task ".concat(i), todo)
            			return (<Tasks key={ i } id={todo.id} completed={todo.completed} toggleTask={ this.props.toggleTask} >{todo.text}</Tasks>)}.bind(this))
				}
			</div>
		)
	}
}
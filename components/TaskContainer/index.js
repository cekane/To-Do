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
				<TaskContainerHeader></TaskContainerHeader>
				{
					this.props.todos.map(function (todo, i) {
            		return (<Tasks key={ i }>{todo.text}</Tasks>)}.bind(this))
				}
			</div>
		)
	}
}
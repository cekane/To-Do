import React from 'react'

import { sContainer } from './Container.scss'
import { TaskAdder } from '../TaskAdder'
import { TaskContainer } from '../TaskContainer'
import { connect } from 'react-redux'
import { addTask } from '../Redux/actions'
import reducer from '../Redux/reducer';

class _Container extends React.Component {
	render () {
		return(
			<div className={ sContainer }>
				<TaskAdder addTask={ this.props.addTask } />
				<TaskContainer todos={ this.props.todos } />
			</div>
		)
	}
}

export const Container = connect(
	function mapStateToProps(state){
		return { todos: state.todos };
	},
	function mapDispatchToProps(dispatch){
		return { addTask: text => dispatch(addTask(text))}
	}
)(_Container)
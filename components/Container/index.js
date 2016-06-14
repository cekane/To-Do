import React from 'react'

import { sContainer } from './Container.scss'
import { TaskAdder } from '../TaskAdder'
import { TaskContainer } from '../TaskContainer'
import { connect } from 'react-redux'
import { addTask, toggleTask, removeTask, toggleAllTasks, filterToDo, filterFinished, filterAll } from '../Redux/actions'
import reducer from '../Redux/reducer';

class _Container extends React.Component {
	render () {
		return(
			<div className={ sContainer }>
				<TaskAdder addTask={ this.props.addTask }/>
				<TaskContainer filterAll={this.props.filterAll} filterFinished={this.props.filterFinished} filterToDo={this.props.filterToDo} todos={ this.props.todos } toggleTask={this.props.toggleTask} toggleAllTasks={this.props.toggleAllTasks} removeTask={this.props.removeTask}/>
			</div>
		)
	}
}

export const Container = connect(
	function mapStateToProps(state){
		return { todos: state.todos };
	},
	function mapDispatchToProps(dispatch){
		return { 
			addTask: text => dispatch(addTask(text)),
			toggleTask: id => dispatch(toggleTask(id)),
			removeTask: x => dispatch(removeTask()),
			toggleAllTasks: val => dispatch(toggleAllTasks(val)),
			filterToDo: x=>dispatch(filterToDo()),
			filterFinished: x=>dispatch(filterFinished()),
			filterAll: x=>dispatch(filterAll())
		}
	}
)(_Container)
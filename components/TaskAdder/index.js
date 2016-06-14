import React from 'react'

import { ta, flex } from './TaskAdder.scss'
import { Button } from '../Button'
import className from 'classnames'

export class TaskAdder extends React.Component {

	constructor(props){
		super(props);
		this.state = {text: ''};
	}

	render () {
		return (
			<div className={ flex }>
				<h1 className={ ta }>Task</h1>
				
				<input className={ className(ta, "form-control") } type="text" onChange={e=>{this.setState({text: e.target.value})}} placeholder="Add Task" value={this.state.text}/>
				
				<Button icon= { "add" }  color={"green"} onClick={e=>
					{
						e.preventDefault()
						this.props.addTask(this.state.text)
						this.setState({text: ''})
					}
				}></Button>
			</div>
		)
	}
}

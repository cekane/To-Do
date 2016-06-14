import React from 'react'

import { tch, fstyle, istyle, lstyle } from './TaskContainerHeader.scss'
import { Button } from '../Button'
import { createStore } from 'redux'

export class TaskContainerHeader extends React.Component {
	checkValue(checkbox)
	{
		set.state
	}
	render () {
		return (
			<div className = { tch }>
				<div>
					<label className={ lstyle }>
						<input className = { istyle } type="checkbox" onClick={ e=>{
								var checkedValue = e.target.checked
								console.log(checkedValue)
								this.props.toggleAllTasks(checkedValue) 
							}
							}/>
						Mark All
					</label>
				</div>
				<div>
					<Button text={ "To-do" }></Button>
				</div>
				<div>
					<Button text={ "Finished" }></Button>
				</div>
				<div>
					<Button text={ "All" }></Button>
				</div>
				<div>
					<center>
						<Button icon={ "delete" }  onClick={e=>
							{
								e.preventDefault()
								this.props.removeTask()
							}
						}
						></Button>
					</center>
				</div>
			</div>
		)
	}
}
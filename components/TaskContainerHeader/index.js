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
								this.props.toggleAllTasks(checkedValue) 
							}
							}/>
						Mark All
					</label>
				</div>
				<div>
					<Button text={ "To-do" } color={"default"} onClick={
						e=>{
							e.preventDefault()
							this.props.filterToDo()
						}
					}></Button>
				</div>
				<div>
					<Button text={ "Finished" } color={"default"} onClick={
						e=>{
							e.preventDefault()
							this.props.filterFinished()
						}
					}></Button>
				</div>
				<div>
					<Button text={ "All" } color={"default"} onClick={
						e=>{
							e.preventDefault()
							this.props.filterAll()
						}
					}></Button>
				</div>
				<div>
					<center>
						<Button icon={ "delete" }  color={"red"} onClick={e=>
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
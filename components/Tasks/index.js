import React from 'react'

import { tch, istyle, lstyle, fstyle } from './Tasks.scss'
import { Button } from '../Button'
import { Select, Case } from '../Select'

export class Tasks extends React.Component {
	constructor(props){
		super(props);
		this.state= {checked:''}
	}
	render () {
		
		return (
			<div className = { tch }>
				<Select on= {this.props.completed}>
					<Case when={true}>
						<strike><label className={ lstyle } >
							<input className = { istyle } type="checkbox" checked="checked" onClick={ e=>{
								e.preventDefault()
								this.props.toggleTask(this.props.id) 
							}
							}/>
							<h3 className= { fstyle } >{this.props.children}</h3>
						</label></strike>
					</Case>
					<Case when={false}>
						<label className={ lstyle } >
							<input className = { istyle } type="checkbox" checked="" onClick={ e=>{
								e.preventDefault()
								this.props.toggleTask(this.props.id) 
							}
							}/>
							<h3 className= { fstyle } >{this.props.children}</h3>
						</label>
					</Case>
				</Select>
			</div>
		)
	}
}
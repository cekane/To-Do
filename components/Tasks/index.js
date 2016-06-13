import React from 'react'

import { tch, istyle, lstyle, fstyle } from './Tasks.scss'
import { Button } from '../Button'

export class Tasks extends React.Component {
	constructor(props){
		super(props)
	}
	render () {
		return (
			<div className = { tch }>
				<label className={ lstyle }>
					<input className = { istyle } type="checkbox"/>
					<h3 className= { fstyle } >{this.props.children}</h3>
				</label>
			</div>
		)
	}
}
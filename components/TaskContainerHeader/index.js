import React from 'react'

import { tch, fstyle, istyle, lstyle } from './TaskContainerHeader.scss'
import { Button } from '../Button'
import { createStore } from 'redux'

export class TaskContainerHeader extends React.Component {

	render () {
		return (
			<div className = { tch }>
				<div>
					<label className={ lstyle }><input className = { istyle } type="checkbox"/>
					Mark All</label>
				</div>
				
				<div>
					<center>
						<Button icon={ "delete" } ></Button>
					</center>
				</div>
			</div>
		)
	}
}
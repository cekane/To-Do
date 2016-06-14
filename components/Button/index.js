import React from 'react'

import { button, btn, tstyle } from './Button.scss'
import className from 'classnames'

export class Button extends React.Component {
	render () {
		const {
			onClick,
			icon,
			text
		} = this.props
		return (
			<div className={ button } onClick={ onClick } >
				<h4 className={tstyle} >{text}</h4>
				<i className={className(btn, "material-icons")}>{icon}</i>
			</div>
		)
	}
}
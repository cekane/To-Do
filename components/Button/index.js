import React from 'react'

import { button, btn, tstyle, greenBtn, defaultBtn, redBtn } from './Button.scss'
import className from 'classnames'

export class Button extends React.Component {
	render () {
		var btnColor
		if(this.props.color === 'green')
		{
			btnColor = greenBtn
		}
		else if(this.props.color === 'red')
		{
			btnColor = redBtn
		}
		else{
			btnColor = defaultBtn
		}
		const {
			onClick,
			icon,
			text,
			color
		} = this.props
		return (
			<div className={ className(button, btnColor)} onClick={ onClick } >
				<h4 className={tstyle} >{text}</h4>
				<i className={className(btn, "material-icons")}>{icon}</i>
			</div>
		)
	}
}
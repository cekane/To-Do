import React from 'react'

import { button, btn } from './Button.scss'
import className from 'classnames'

export class Button extends React.Component {
	render () {
		const {
			onClick,
			icon
		} = this.props
		return (
			<div className={ button } onClick={ onClick } >
				<i className={className(btn, "material-icons")}>{icon}</i>
			</div>
		)
	}
}
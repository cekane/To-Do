import React, { PropTypes } from 'react'
import className from 'classnames'



import {
  bar,
  inLine,
  topBarBtnStyle,
  btnHover
}from './TopBar.scss'

export class TopBarBtn extends React.Component {

  render() {
  	const {
  		onClick,
  		children: text
  	} = this.props
    return (
      <div className={ className(topBarBtnStyle,btnHover)} onClick={onClick}><h3>{ text }</h3></div>
    )
  }
}
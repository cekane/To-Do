import React, { PropTypes } from 'react'

import {
  bar,
  inLine
}from './TopBar.scss'

export class TopBarContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    this.wrappedChildren = this.props.children;
    if(this.props.children !== Array)
    {
      this.wrappedChildren = [this.props.children];
    }
    return (
      <ul className={ bar}> 
        { this.wrappedChildren.map( val => <li key={ val } className= { inLine }>{val}</li>) }
      </ul>
    )
  }
}
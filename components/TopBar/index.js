import React, { PropTypes } from 'react'

import {
  topBar,
  topbarFixedTop,
  topbarLeft,
  bar,
  topbarRight,
  container
} from './TopBar.scss'

import { TopBarContent } from './TopBarContent'

export const TopBar = ({fixed = true, children}) => {

  let wrappedChildren = children;
  if(!children.length)
  {
    wrappedChildren = [children]
  }

  const leftChildren = wrappedChildren.filter(function(child){return child.props.align === 'left' });
  const rightChildren = wrappedChildren.filter(function(child){return child.props.align === 'right' });

  return (
    <div className={topbarFixedTop} role="navigation">
        <ul className={ topbarLeft }>
          { leftChildren }
        </ul>
        <ul className={topbarRight }>
          { rightChildren }
        </ul>
    </div>
  )
}

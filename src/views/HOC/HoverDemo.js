import React from 'react'
import styles from './HoverStyles'
import classes from './HOC.scss'

const { string, bool } = React.PropTypes

const HoverDemo = (props) => {
  const { defaultStyles, hoverStyles } = styles(props.color)
  const activeStyle = props.hover ? hoverStyles : defaultStyles
  return (
    <div style={activeStyle} {...props}>
      <span className={classes.label}>{props.label}</span>
    </div>)
}

HoverDemo.propTypes = {
  hover: bool,
  label: string,
  color: string.isRequired
}
export default HoverDemo

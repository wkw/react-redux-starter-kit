import React, { Component } from 'react'
import styles from './HoverStyles'
import classes from './ComponentsBox.scss'

const { string, bool } = React.PropTypes

export default class HoverDemo extends Component {

  // modify inline style based on hover state (our prop)
  get styles () {
    const { defaultStyles, hoverStyles } = styles(this.props.color)
    return this.props.hover ? hoverStyles : defaultStyles
  }

  render () {
    return (
      <div style={this.styles} {...this.props}>
        <span className={classes.label}>{this.props.label}</span>
      </div>
      )
  }
}

HoverDemo.propTypes = {
  hover: bool,
  label: string,
  color: string.isRequired
}

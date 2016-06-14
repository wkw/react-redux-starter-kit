import React, { Component } from 'react'
import styles from './HoverStyles'
import classes from './HOC.scss'

const { string, bool } = React.PropTypes

export default class HoverDemoOwnProps extends Component {
  state = { hover: false };

  render () {
    const { defaultStyles, hoverStyles } = styles(this.props.color)
    const activeStyle = this.state.hover ? hoverStyles : defaultStyles
    const mouseOver = () => this.setState({hover: true})
    const mouseOut = () => this.setState({hover: false})

    return (
      <div style={activeStyle}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}>
        <span className={classes.label}>{this.props.label}</span>
      </div>
      )
  }
}

HoverDemoOwnProps.propTypes = {
  hover: bool,
  label: string,
  color: string.isRequired
}

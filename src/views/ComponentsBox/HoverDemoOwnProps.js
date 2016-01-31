import React, { Component } from 'react'
import styles from './HoverStyles'
import classes from './ComponentsBox.scss'

const { string, bool } = React.PropTypes

export default class HoverDemoOwnProps extends Component {
  state = { hover: false };

  // modify inline style based on hover state (our prop)
  get styles () {
    const { defaultStyles, hoverStyles } = styles(this.props.color)
    return this.state.hover ? hoverStyles : defaultStyles
  }

  render () {
    const mouseOver = () => this.setState({hover: true})
    const mouseOut = () => this.setState({hover: false})

    return (
      <div style={this.styles}
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

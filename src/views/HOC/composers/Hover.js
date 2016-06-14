import React, { Component } from 'react'
import { getDisplayName } from 'lib/utils'

const { element } = React.PropTypes

const hover = (WrappedComponent) => class Hover extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props,
      hover: false,
      handlers: {
        onMouseOver: () => this.setState({hover: true}),
        onMouseOut: () => this.setState({hover: false})
      }
    }
  }

  static propTypes = {
    children: element
  };

  static displayName = `Hover(${getDisplayName(WrappedComponent)})`;

  render () {
    const { handlers, ...props } = this.state

    return (
      <WrappedComponent {...props} {...handlers}>
        {this.props.children}
      </WrappedComponent>
      )
  }
}

export default hover

import React, { Component } from 'react'

const { element } = React.PropTypes

function getDisplayName (WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const hover = (WrappedComponent) => {
  class Hover extends Component {

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

    render () {
      const { handlers, ...props } = this.state

      return (
        <WrappedComponent {...props} {...handlers}>
          {this.props.children}
        </WrappedComponent>
        )
    }
  }

  Hover.propTypes = {
    children: element
  }

  Hover.displayName = `Hover(${ getDisplayName(WrappedComponent) })`

  return Hover
}

export default hover

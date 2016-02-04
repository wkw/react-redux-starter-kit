import React, { Component, PropTypes } from 'react'

export default class Slide extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render () {
    return (
      <div className='Slide'>
        <div className='Slide-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

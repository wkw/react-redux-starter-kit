import React, { Component } from 'react'
import HoverDemo from 'views/ComponentsBox/HoverDemo'
import HoverDemoOwnProps from 'views/ComponentsBox/HoverDemoOwnProps'
import hover from 'views/ComponentsBox/components/Hover'

export default class ComponentsBoxView extends Component {

  render () {
    const HoverableBlock = hover(HoverDemo)

    return (
      <div className='container text-center'>
        <h1>Reusable Components</h1>
        <h3>Higher-Order Component Handling Hover Actions</h3>
        <HoverableBlock label='Higher-Order Component' color='#4A80B9'/>
        <HoverDemoOwnProps label='Own Props' color='#EF3B4A'/>
      </div>
      )
  }
}

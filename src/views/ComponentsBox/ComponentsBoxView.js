import React, { Component } from 'react'
import HoverDemo from 'views/ComponentsBox/HoverDemo'
import HoverDemoOwnProps from 'views/ComponentsBox/HoverDemoOwnProps'
import hover from 'views/ComponentsBox/components/Hover'
import classes from './ComponentsBox.scss'

export default class ComponentsBoxView extends Component {

  render () {
    const HoverableBlock = hover(HoverDemo)

    return (
      <div className={`container text-center ${classes.hoc}`}>
        <h1>Reusable Components</h1>
        <span>Mixins (formerly), Higher-Order Components with es6 classes</span>

        <HoverableBlock label='Higher-Order Component' color='#289C36' hover={false}/>
        <HoverDemoOwnProps label='Own Props' color='#EF3B4A' hover={false}/>
      </div>
      )
  }
}

import React, { Component } from 'react'
import HoverDemo from 'views/HOC/HoverDemo'
import HoverDemoOwnProps from 'views/HOC/HoverDemoOwnProps'
import hover from 'views/HOC/composers/Hover'
import classes from './HOC.scss'
import PromiseDemo from './PromiseDemo'

export default class ComponentsBoxView extends Component {

  render () {
    // wrap the HoverDemo component
    const HoverableBlock = hover(HoverDemo)

    return (
      <div className={`container text-center ${classes.hoc}`}>
        <h1>Reusable Components</h1>
        <span>Mixins (formerly), Higher-Order Components with es6 classes</span>

        <HoverableBlock label='Higher-Order Component' color='#289C36' hover={false}/>
        <HoverDemoOwnProps label='Own Props' color='#EF3B4A' hover={false}/>

        <PromiseDemo label={`Promise Something`} />
      </div>
      )
  }
}

import React from 'react'
// import TimerExample from './TimerExample';
import HoverDemo from 'views/HOC/HoverDemo'
import HoverDemoOwnProps from 'views/HOC/HoverDemoOwnProps'
import hover from 'views/HOC/composers/Hover'
import classes from 'views/HOC/HOC.scss'
import PromiseDemo from 'views/HOC/PromiseDemo'

// wrap the HoverDemo component
const HoverableBlock = hover(HoverDemo)

export default [
  <div>This is my first slide</div>,
  <div>This is my second slide
    <p>paragraph conent</p>
    <div className={`container text-center ${classes.hoc}`}>
      <HoverDemoOwnProps label='Own Props' color='#EF3B4A' hover={false}/>
    </div>
  </div>,
  <div>
    <p>I got an example here!</p>
    <div className={`container text-center ${classes.hoc}`}>
      <HoverDemoOwnProps label='Own Props' color='#EF3B4A' hover={false}/>
      <HoverableBlock label='Higher-Order Component' color='#289C36' hover={false}/>
    </div>
  </div>,
  <div>And here are Higher-Order Components, previously React Mixins</div>,
  <div>HOC's can take multiple components and compose them</div>
]

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
  <div>
    ReactJS Mixins<br/>
    <p className='small'>
      "Components are the best way to reuse code in React, but sometimes very different components may share some common functionality. These are sometimes called cross-cutting concerns. React provides mixins to solve this problem."
      <a href='https://facebook.github.io/react/docs/reusable-components.html#mixins' target='ext'> &nbsp;[ref]</a>
    </p>

    <p className='small'>A nice feature of mixins is ... all of the lifecycle methods are guaranteed to be called.</p>
  </div>,
  <div>
    ReactJS Mixins<br/>
    <p className='small'>One common use case is a component wanting to update itself on a time interval. It's easy to use setInterval(), but it's important to cancel your interval when you don't need it anymore to save memory.
      <br/><br/>React provides lifecycle methods that let you know when a component is about to be created or destroyed.</p>
  </div>,

  <div>
    ReactJS Mixins<br/>
    <div className='small'>
      Why use mixins anyway?<br/>
      What problems do they solve?<br/>Can we solve these problems differently, without inheritance, and super woes?
      <h3>Utility Functions</h3>
      This case is a no-brainer. If you use mixins to share utility functions, extract them to modules and import and use them directly.
      <h3>Lifecycle Hooks and State Providers</h3>
      This is the main use case for mixins. If you’re not very familiar with React’s mixin system, it tries to be smart and “merges” lifecycle hooks. If both the component and the several mixins it uses define the componentDidMount lifecycle hook, React will intelligently merge them so that each method will be called. Similarly, several mixins can contribute to the getInitialState result.
      <br/><br/>In practice, this behaviour is the single thing that makes mixins useful. They can subscribe the component’s state to a Flux Store or they can work with its DOM node after it is updated. It’s absolutely necessary that any component extension mechanism has the access to the component’s lifecycle.
      <br/><br/><a className='ref' href='https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.bkbi8q5uz' target='ext'>[ source: Mixins Are Dead. Long Live Composition ]</a>
    </div>
  </div>,
  <div>
    Mixins are added to Components and <b>participate</b> in the React Component <b>Lifecycle</b>
  </div>,
  <div>
    <strike>ReactJS Mixins</strike><br/>
    Composition, Decorators,<br/><br/>
    Higher-Order Components<br/>
    <span style={{fontSize: 24}}>(es7 @decorator)</span>
  </div>,
  <div>I got an example here!
    <p className='small'>( this is a Componentized Deck )</p>
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
  <div>Fetch Some Data,<br/>then Render</div>,
  <div>
    Fetch Some Data,<br/>then Render
    <div style={{fontSize: '3vmin'}}>
      <PromiseDemo className='small' label={`Promise Something`} />
    </div>
  </div>,
  <div><i>fin</i></div>
]

import React, { Component } from 'react'
import { getDisplayName } from 'lib/utils'

const STYLE_START = 'color:green;'
const STYLE_END = 'color:red;'

var Delay = (delay, DelayedComponent) => class extends Component {
  constructor (props) {
    super(props)
    this.state = {completed: false}
  }

  static displayName = `Delayed(${ getDisplayName(DelayedComponent) })`;

  componentDidMount () {
    // start timer
    console.log(`%c==>Timer starting @ ${new Date()}`, STYLE_START)
    this.timer = setTimeout(() => this.setState({completed: true}), delay)
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.completed) {
      console.log(`==>%cTimer Ended @ ${new Date()}`, STYLE_END)
    }
  }

  componentWillUnmount () {
    console.log('==>Clearing timeout on unmount')
    this.timer && clearTimeout(this.timer)
  }

  render () {
    if (this.state.completed) {
      return <DelayedComponent {...this.props} />
    } else {
      return <div>Wait for it... {`[delay = ${delay / 1000}s]`}</div>
    }
  }
}
export default Delay

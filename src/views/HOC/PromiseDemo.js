import React, { Component } from 'react'
import Promised from './composers/Promised.js'
import Delay from './composers/Delay'
import DisplayBox from './DisplayBox'

const { string } = React.PropTypes
const DELAY = 1500
const CHUCK_API = 'http://api.icndb.com/jokes/random'
const BACON_API = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1'

export default class PromiseDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {clicked: false}
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.setState(...this.state, {clicked: true})
  }

  render () {
    const FetchJoke = Promised('content', DisplayBox)
    const DelayedJoke = Delay(DELAY, FetchJoke)
    const Bacon = Promised('content', DisplayBox)

    return (
      <div className='button-demo'>
        <button className='btn btn-primary btn-lg' onClick={() => this.setState(...this.state, {clicked: true})}>
          {this.props.label}
        </button>

        <div>
          {
            this.state.clicked &&
              [
                <FetchJoke content={fetch(CHUCK_API).then(resp => (resp.json()).then(val => (val.value.joke)))} key='1'/>,
                <DelayedJoke content={fetch(CHUCK_API).then(resp => (resp.json()).then(val => (val.value.joke)))} key='2'/>,
                <Bacon content={fetch(BACON_API).then(resp => (resp.json()).then(val => (val[0])))} key='3'/>
              ]
          }
        </div>
      </div>
      )
  }
}
PromiseDemo.propTypes = {
  label: string.isRequired
}

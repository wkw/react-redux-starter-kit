import React, { Component } from 'react'
import { getDisplayName } from 'lib/utils'

var Promised = (promiseProp, Decorated) => class extends Component {
    constructor (props) {
      super(props)
      this.state = {loading: true, error: null, value: null}
    }

    static displayName = `Promised(${ getDisplayName(Decorated) })`;

    render () {
      if (this.state.loading) {
        return <span>Loading...</span>
      } else if (this.state.error !== null) {
        return <span>Error: {this.state.error.message}</span>
      } else {
        let propsWithoutThePromise = Object.assign({}, this.props)
        propsWithoutThePromise[promiseProp] = this.state.value
        return <Decorated {...propsWithoutThePromise} />
      }
    }

    componentDidMount () {
      this.props[promiseProp].then(
          value => this.setState({loading: false, value: value}),
          error => this.setState({loading: false, error: error}))
    }
}

export default Promised

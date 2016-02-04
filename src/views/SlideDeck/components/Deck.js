import React, { Children, PropTypes } from 'react'

export default class Deck extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    currentSlide: PropTypes.number.isRequired
  };

  render () {
    const { children, currentSlide } = this.props

    return (
      <div className='Deck'>
        <div className='Deck-container'
             style={{
               width: `${Children.count(children) * 100}vw`,
               transform: `translate(${-currentSlide * 100}vw, 0)`,
               transition: 'all .25s ease-out'
             }}>
          {Children.map(children, this.wrapChild)}
        </div>
      </div>
    )
  }

  wrapChild (slide) {
    return (
      <div className='Deck-item'>
        {slide}
      </div>
    )
  }
}

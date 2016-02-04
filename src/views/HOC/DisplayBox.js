import React from 'react'

var DisplayBox = ({content}) =>
  <div className='container'>
      <div className='alert alert-info' style={{marginTop: 10}}>
      {content}
      </div>
  </div>

export default DisplayBox

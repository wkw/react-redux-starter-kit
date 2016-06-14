/* eslint react/prop-types: 0 */
import React from 'react'

export default ({content}) => (
  <div className='container'>
    <div className='alert alert-info' style={{marginTop: 10}}>
    {content}
    </div>
  </div>
)

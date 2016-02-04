import React from 'react'

var DisplayBox = ({content}) => {
  // console.log('==>Box Props', props)
  return (
    <div className='container'>
        <div className='alert alert-info' style={{marginTop: 10}}>
        {content}
        </div>
    </div>
  )
}

export default DisplayBox

// import React, { PropTypes } from 'react'
// DisplayBox.propTypes = {
//   children: PropTypes.element
// }

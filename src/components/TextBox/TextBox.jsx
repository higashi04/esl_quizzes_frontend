import React from 'react'
import './TextBox.css';
const TextBox = (props) => {
  return (
    <div className='textBox m-3'>
      <div>
      {props.text}
      </div>
    </div>
  )
}

export default TextBox

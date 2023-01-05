import React from 'react'
import './TextBox.css';
const TextBox = (props) => {
  return (
    <div className='textBox m-3'>
      <div>
      {props.text}
      </div>
      <div>
        <img className='textBoxImg m-5' src={props.pict} alt="descriptive picture"  />
      </div>
    </div>
  )
}

export default TextBox

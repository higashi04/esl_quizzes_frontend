import React from 'react';

import TextBox from '../TextBox/TextBox';

const MorningAtHome = () => {
    const textArray = [
        {id: 1, text: "Well, I'm pretty busy. I get up early and check my email. I listen to the radio - I don't watch TV on weekdays. Then I study."},
        {id: 2, text: "Noisy! I try to study, but my brother and sister make a lot of noise. They don't care. My sister watches TV, and my brother plays games on the computer."},
        {id: 3, text: "Well, I'm pretty busy. I get up early and check my email. I listen to the radio - I don't watch TV on weekdays. Then I study."},
    ]
  return (
    <div>
      <h2>What's a typical morning like in your home?</h2>
      <div className="container">
        <div className="row">
        {textArray.map(item => <TextBox key={item.id} text={item.text} />)}
        </div>
      </div>
    </div>
  )
}

export default MorningAtHome

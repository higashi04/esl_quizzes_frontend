import React from 'react';
import pict1 from '../../assets/4A/pic1.jpg'
import pict2 from '../../assets/4A/pic2.jpg'
import TextBox from '../TextBox/TextBox';

const MorningAtHome = () => {
    const textArray = [
        {id: 1, text: "Well, I'm pretty busy. I get up early and check my email. I listen to the radio - I don't watch TV on weekdays. Then I study.", pict: pict1},
        {id: 2, text: "Noisy! I try to study, but my brother and sister make a lot of noise. They don't care. My sister watches TV, and my brother plays games on the computer.", pict: pict2 },
        {id: 3, text: "It's crazy. We get up late, so I eat breakfast in the car. My husband doesn't have breakfast - he drives.", pict: pict1},
        {id: 4, text: "Well, my wife and I read the newspaper. I have breakfast, and my wife has coffee. We're pretty quiet. We don't talk a lot.", pict: pict1},
    ]
  return (
    <div>
      <h2>What's a typical morning like in your home?</h2>
      <div className="container">
        <div className="row">
        {textArray.map(item => <TextBox key={item.id} text={item.text} pict={item.pict} />)}
        </div>
      </div>
    </div>
  )
}

export default MorningAtHome

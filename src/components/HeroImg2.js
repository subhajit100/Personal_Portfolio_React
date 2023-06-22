import '../css/HeroImg2Styles.css'

import React from 'react'

const HeroImg2 = (props) => {
    const {heading, text} = props;
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroImg2;

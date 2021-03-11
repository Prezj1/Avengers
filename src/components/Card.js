 
import React from 'react';


const Card = ({name, link, icon}) => {
  return (


<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  <img alt='avengers' className='photo' src={icon} />
  <div>
  <h2>{name}</h2>
  <a href={link} target="_blank" rel="noreferrer">To learn more about {name}</a>
  </div>
 </div>
 

)}

export default Card


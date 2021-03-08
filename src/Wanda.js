import React from 'react';



const Wanda = (props) => {
	return (


<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  <img alt='avengers' className='photo' src='https://www.superherodb.com/pictures2/portraits/10/050/444.jpg?v=1595433035' />
  <div>
  <h2>{props.name}</h2>
  <p>{props.email}</p>
<a href="https://marvelcinematicuniverse.fandom.com/wiki/Scarlet_Witch" target="_blank" rel="noreferrer">To learn more about {props.name}</a>
  </div>
 </div>
 

)}


export default Wanda
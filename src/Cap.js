import React from 'react';



const Cap = (props) => {
	return (


<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  <img alt='avengers' className='photo' src='https://www.superherodb.com/pictures2/portraits/10/050/274.jpg?v=1599853488' />
  <div>
  <h2>{props.name}</h2>
  <p>{props.email}</p>
  <a href="https://marvelcinematicuniverse.fandom.com/wiki/Captain_America" target="_blank" rel="noreferrer">To learn more about {props.name}</a>
  </div>
 </div>
 

)}




export default Cap
import React from 'react';
import Card from './Card';

const AvengersList = ({avengers}) => {
	return (
		<div>
		{
			avengers.map((user,i) => {
				return (
					<Card
					key={i}
					id={avengers[i].id} 
					name={avengers[i].name} 
					email={avengers[i].email}
					link={avengers[i].link}
					icon={avengers[i].icon}
					/>
				)	
			})
		}				
		</div>	
		);
}

export default AvengersList;
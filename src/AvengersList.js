import React from 'react';
import Hulk from './Hulk'
import Cap from './Cap'
import Hawk from './Hawk'
import Nat from './Nat'
import Wanda from './Wanda'
import Falcon from './Falcon'
import Bucky from './Bucky'
import Panther from './Panther'
import Thor from './Thor'
import Doc from './Doc'

const AvengersList = ({avengers}) => {
	return (
	<div>
    <Hulk id={avengers[0].id} name={avengers[0].name} email={avengers[0].email}/>
    <Cap id={avengers[1].id} name={avengers[1].name} email={avengers[1].email}/>
    <Hawk id={avengers[2].id} name={avengers[2].name} email={avengers[2].email}/>
    <Nat id={avengers[3].id} name={avengers[3].name} email={avengers[3].email}/>
    <Wanda id={avengers[4].id} name={avengers[4].name} email={avengers[4].email}/>
    <Falcon id={avengers[5].id} name={avengers[5].name} email={avengers[5].email}/>
    <Bucky id={avengers[6].id} name={avengers[6].name} email={avengers[6].email}/>
    <Panther id={avengers[7].id} name={avengers[7].name} email={avengers[7].email}/>
    <Thor id={avengers[8].id} name={avengers[8].name} email={avengers[8].email}/>
    <Doc id={avengers[9].id} name={avengers[9].name} email={avengers[9].email}/>
    </div>
	);
}

export default AvengersList;
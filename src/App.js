import React, { Component } from 'react';
import AvengersList from './AvengersList';
import { avengers } from './avengers';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
	super()
	this.state = {
	avengers: avengers,
    searchChange: ''
	}
	}

onSearchChange = (event) => {
   this.setState({searchChange: event.target.value})
   // const filteredAvengers = this.state.avengers.filter(avengers =>{
   // return avengers.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   // })

}

	render() {
	    const filteredAvengers = this.state.avengers.filter(avengers =>{
        return avengers.name.toLowerCase().includes(this.state.searchChange.toLowerCase());
   })
	return (
		<div className='tc'>
		<h1>Marvels Avengers</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<AvengersList avengers={filteredAvengers}/>
		</div>

	);
}
}

export default App;
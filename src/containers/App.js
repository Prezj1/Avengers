import React, { Component } from 'react';
import AvengersList from '../components/AvengersList';
import { avengers } from './avengers';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
	super()
	this.state = {
	avengers: [],
    searchChange: ''
	}
	}

componentDidMount() {
	this.setState({ avengers: avengers});
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
		<h1 className='f1'>Marvels Avengers</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundary>
		<AvengersList avengers={filteredAvengers}/>
		</ErrorBoundary>
		</Scroll>
		</div>

	)
}
}

export default App;

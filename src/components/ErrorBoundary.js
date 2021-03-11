import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor({avengers}) {
		super({avengers});
		this.state = {
			hasError: false
		}
	}

componentDidCatch(error, info) {
 this.setState({ hasError: true })
}

	render() {
	if(this.state.hasError){
		return<h1>Technical difficulties present</h1>
	}
	return this.props.children
	}
}

export default ErrorBoundary;
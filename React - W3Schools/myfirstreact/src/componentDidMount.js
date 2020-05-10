import React from 'react';
//import ReactDOM from 'react-dom';

class Header2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {favouriteFood: "Curry"};
	}

	render() {
		return(
			<h1>My favourite food is { this.state.favouriteFood }</h1>
		);
	}

	componentDidMount() {
		setTimeout(() => { this.setState({favouriteFood: "Pizza"}) }, 10000)
	}
}

export default Header2;
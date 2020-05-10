import React from 'react';
//import ReactDOM from 'react-dom';

class Header4 extends React.Component {
	constructor(props){
		super(props);
		this.state = { favouriteColor: "red" };
	}

	shouldComponentUpdate() {
		return true;
	}

	changeColor = () => {
		this.setState({ favouriteColor: "blue" });
	}

	render() {
		return(
			<div>
				<h1>My fav. Colour is { this.state.favouriteColor }</h1>
				<button type = "button" onClick={this.changeColor}>Change Colour</button>
			</div>
		);
	}
}


export default Header4;
import React from 'react';
//import ReactDOM from 'react-dom';

class Header3 extends React.Component {
	constructor(props){
		super(props);
		this.state = {favouritecolor: "red"};
	}

	static getDerivedStateFromProps(props, state) {
		return { favouritecolor: props.favcol };
	}

	changeColor = () => {
		this.setState({ favouritecolor: "blue" });
	}

	render() {
		return(
			<div>
				<h1>My favourite Colour is { this.state.favouritecolor }</h1>
				<button type="button" onClick={this.changeColor}>Change Colour</button>
			</div>
		);
	}
}

export default Header3;
import React from 'react';
//import ReactDOM from 'react-dom';

class Header5 extends React.Component {
	constructor(props){
		super(props);
		this.state = {favColour: "green"};
	}

	componentDidMount() {
		setTimeout(() => { this.setState({favColour: "Black"})}, 10000)
	}

	getSnapshotBeforeUpdate(prevProps, prevState){
		document.getElementById("div1").innerHTML = "Favourite was: " + prevState.favColour;
	}

	componentDidUpdate() {
		document.getElementById("div2").innerHTML = "Favourite is: " + this.state.favColour;
	}

	render() {
		return(
			<div>
				<h4>Alan's favourite Colour is {this.state.favColour}</h4>
				<div id="div1"></div>
				<div id="div2"></div>
			</div>
		);
	}
}

export default Header5;
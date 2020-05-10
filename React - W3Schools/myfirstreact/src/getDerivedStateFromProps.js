import React from 'react';
//import ReactDOM from 'react-dom';

class Header1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {favouriteMusic: "rock"}
	}
	static getDerivedStateFromProps(props, state) {
		return {favouriteMusic: props.favMusic};
	}
	render(){
		return (
			<h4>My favourite Music is { this.state.favouriteMusic } </h4>
		);		
	}
}

export default Header1;
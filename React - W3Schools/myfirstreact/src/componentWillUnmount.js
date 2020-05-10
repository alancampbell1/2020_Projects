import React from 'react';
//import ReactDOM from 'react-dom';

class Header6 extends React.Component {
	constructor(props){
		super(props);
		this.state = {show: true};
	}

	delHeader = () => {
		this.setState({show:false});
	}
	
	render() {
		let myHeader;
		if(this.state.show){
			myHeader = <Child />;
		};
		return(
			<div>
				{myHeader}
				<button type="button" onClick={this.delHeader}>Delete Header</button>
			</div>
		);
	}
}

class Child extends React.Component {
	componentWillUnmount() {
		alert("The component is about to be deleted.");
	}
	render() {
		return(
			<h1>Hello World!</h1>
		); 
	}
}


export default Header6;
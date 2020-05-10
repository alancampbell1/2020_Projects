import React from 'react';
import ReactDOM from 'react-dom';

class MyForm4 extends React.Component {

	constructor(props){
	
		super(props);
		this.state = { username: 'Customer' };

	}
	
	/**	Called when user presses Submit	**/
	mySubmitHandler = (event) => {

		event.preventDefault();
		alert("You are submitting " + this.state.username );
	
	}
	
	/**	Called when user interacts with input box	**/
	myChangeHandler = (event) => {

		this.setState({username: event.target.value});
	
	}

	render() {

		return(

			<form onSubmit={this.mySubmitHandler}>
				<h1>Hello {this.state.username}</h1>
				<p>Enter your name:</p>
				<input type='text' onChange={this.myChangeHandler}/>
				<input type='submit'/>
			</form>	
		);	
	}
}

export default MyForm4;
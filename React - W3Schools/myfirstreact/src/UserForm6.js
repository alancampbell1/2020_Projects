import React from 'react';
import ReactDOM from 'react-dom';

class MyForm6 extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			age:null,	
		};
	}

	mySubmitHandler = (event) => {
		event.preventDefault();
		let age = this.state.age;
		if(!Number(age)) {
			alert("Your age must be Numeric");
		}
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
    }
    
    /**
     * The check on age is done in the submit. However, it is always accepted
     * regardless of the alert message included. There is scope to improve code here
     */

	render() {
		return(
			<form onSubmit={this.mySubmitHandler}>
		
				<h1>Hello {this.state.username} {this.state.age}</h1>
				<p>Enter your name</p>
				<input type='text' name='username' onChange={this.myChangeHandler} />

				<p>Enter your age:</p>
				<input type='text' name='age' onChange={this.myChangeHandler} />

				<input type='submit' />
			</form>
		);
	}
}

export default MyForm6;
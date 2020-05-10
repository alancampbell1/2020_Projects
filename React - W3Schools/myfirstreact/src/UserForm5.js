import React from 'react';
import ReactDOM from 'react-dom';

class MyForm5 extends React.Component {
	constructor(props){
	
		super(props);
		this.state = {
		
			username: '',
			age: null,
		
		};
	}

	myChangeHandler = (event) => {

		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});

	}

	render(){

		return(

            /**
             * The input boxes have name values attached to distinguish them
             */

			<form>
				<h1>Hello {this.state.username} {this.state.age}</h1>
				<p>Enter your name:</p>
				<input type='text' name='username' onChange={this.myChangeHandler}/>

			<p>Enter your age:</p>
			<input type='text' name='age' onChange={this.myChangeHandler}/>
			</form>

		);
	}
}

export default MyForm5;
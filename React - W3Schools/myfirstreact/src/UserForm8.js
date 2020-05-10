import React from 'react';
import ReactDOM from 'react-dom';

class MyForm8 extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			description: 'The content of a text area goes in the value att.'
		};	
	}
	render(){
		return(
			<form>
			<textarea value={this.state.description} />
			</form>
		);	
	}
}



export default MyForm8;
import React from 'react';
import ReactDOM from 'react-dom';

class MyStyle3 extends React.Component {
	render(){
		const myPersonalStyle = {
			color: "white",
			backgroundColor: "DodgerBlue",
			padding: "10px",
			fontFamily: "Arial"
		};
		return(
			<div>
				<h1 style={myPersonalStyle}>Hello another style</h1>
			</div>
		);
	}
}


export default MyStyle3;
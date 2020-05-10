import React from 'react';
//import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { colour: "green" };
    }

    render() {
        return <h2>My favourite colour is { this.state.colour }</h2>
    }
}


export default Header;
import React from 'react';
//import ReactDOM from 'react-dom';

class Football extends React.Component {

    shoot() {
        alert("Great Shot!!!");
    }

    render() {
        return(
            <button onClick={this.shoot}>Take another shot</button>
        );
    }
}

export default Football;
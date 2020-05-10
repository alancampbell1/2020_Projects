import React from 'react';
//import ReactDOM from 'react-dom';

class Basketball extends React.Component {

    shoot = (a) => {

        alert(a);

    }

    render(){
        return(
            <button onClick={() => this.shoot("3 points")}>Throw the ball!!!</button>
        );
    }

}



export default Basketball;
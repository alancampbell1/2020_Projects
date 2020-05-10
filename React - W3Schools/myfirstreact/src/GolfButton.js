import React from 'react';
//import ReactDOM from 'react-dom';

class Golf extends React.Component {

    shoot = (a, b) => {
    
        alert(b.type);
    
    }

    render() {

        return(

            /**
             * ev stores the type of event handler, in this case a 'click' object
             */

            <button onClick={(ev) => this.shoot("Shot Taken", ev)}>Swing</button>

        );

    }

}

export default Golf;
import React from 'react';
//import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    render() {
        return(
            <form>
                <h1>Hello User</h1>
                <p>Enter your name:</p>
                <input type="text" />
            </form>
        );
    }
}

export default MyForm;
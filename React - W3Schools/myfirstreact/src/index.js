import React from 'react';
import ReactDOM from 'react-dom';
import Computer from './Computer';
import Header from './lifecycle';
import Header1 from './getDerivedStateFromProps';
import Header2 from './componentDidMount';
import Header3 from './getDeriviedStateFromProps2';
import Header4 from './shouldComponentUpdate';
import Header5 from './getSnapshotBeforeUpdate';
import Header6 from './componentWillUnmount';
import Football from './FootballButton';
import Basketball from './BasketballButton';
import Golf from './GolfButton';
import MyForm from './UserForm1';
import MyForm2 from './UserForm2';
import MyForm3 from './UserForm3';
import MyForm4 from './UserForm4';
import MyForm5 from './UserForm5';
import MyForm6 from './UserForm6';
import MyForm7 from './UserForm7';
import MyForm8 from './UserForm8';
import MyForm9 from './UserForm9';
import MyStyle from './UserStyle1';
import MyStyle2 from './UserStyle2';
import MyStyle3 from './UserStyle3';
import MyStyle4 from './UserStyle4';
import MyStyle5 from './UserStyle5';
import MyStyle6 from './UserStyle6';
 
const myfirstelement = <h1>Hello React!</h1>

/**
 * The ReactDOM function passing HTML Code in the form of the paragraph
 * and HTML element in the form of the root <div> element
**/
ReactDOM.render(myfirstelement, document.getElementById('root'));

const myElement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>Alan</td>
      </tr>
      <tr>
        <td>Niall</td>
      </tr>
    </table>
  );

  ReactDOM.render(myElement, document.getElementById('rootTableDiv'));

  ReactDOM.render(<p>Welcome</p>, document.getElementById('title'));

  const myExpression = <h1> React is { 5 + 5 } times better with JSX </h1>

  ReactDOM.render(myExpression, document.getElementById('expression'));


  /**
   * 
   * Multiple elements in a single variable within paratheses:
   */

  const myFruit = (
        <ul>
            <li>Apples</li>
            <li>Oranges</li>
            <li>Bananas</li>
        </ul>
  );

  ReactDOM.render(myFruit, document.getElementById('myList'));


const myCities = (
    <div>
        <h1>Dublin</h1>
        <h2>London</h2>
    </div>
);

ReactDOM.render(myCities, document.getElementById('myCityNames'));

/**
 * Example of a Class Component
 */
class Car extends React.Component {

    render() {
        return <h2>Skoda Fabia</h2>
    }

}

ReactDOM.render(<Car />, document.getElementById('carDetails'));

/**
 * Example of a Function Component
 */

 function NewCar() {
     return <h2>VM Golf</h2>;
 }

 ReactDOM.render(<NewCar />, document.getElementById('newCarDetails'));

 class MyVan extends React.Component {
     constructor() {
         super();
         this.state = {color: "red"};
     }

     render() {
         return <h2>The Van is a { this.state.color } colour.</h2>
     }
 }

 ReactDOM.render(<MyVan />, document.getElementById('userVan'));

 class Skateboard extends React.Component {
     render() {
         return <h2> My Skateboard is a { this.props.color } colour.</h2>
     }
 }

 ReactDOM.render(<Skateboard color="Black"/>, document.getElementById('mySkateboard'));

 class Plane extends React.Component {
     render() {
         return <h3>The Plane is ready to go.</h3>
     }
 }

 class Engine extends React.Component {
     render() {
         return (
             <div>
                 <h2>The Engine is attached.</h2>
                 <Plane />
             </div>
         )
     }
 }

 ReactDOM.render(<Engine />, document.getElementById("myPlane"));

 ReactDOM.render(<Computer />, document.getElementById("myComputer"));

 class OwnerCar extends React.Component {
    render(){
        return <h4>I am a { this.props.brand } type of car.</h4>
    }
 }
 //This is the prop
 const myElement1 = <OwnerCar brand="Ford" />;

 ReactDOM.render(myElement1, document.getElementById('carInfo'));

/**
 * Passing a String Prop from one Component to another
 */
class BrothersCar extends React.Component {
	render() {
		return <h2>Brother has a { this.props.brand } car!</h2>
	}
} 

class Garage1 extends React.Component {
	render() {
		return (
			<div>
				<h1>Bought from the Garage</h1>
				<BrothersCar brand = "Ford" />
			</div>
		);
	}
}

ReactDOM.render(<Garage1 />, document.getElementById('BrotherCar'));

/**
 * Passing a variable called 'carname'
 */
class SisterCar extends React.Component {
	render() {
		return <h2>Sister has a { this.props.brand } car! </h2>
	}	
}

class SistersCar extends React.Component {
	render() {
		return <h2>Sister has a { this.props.brand } car! </h2>
	}	
}

class Garage2 extends React.Component {
	render() {
		const carname = "Ford";
		return (
			<div>
				<h1>Bought from Garage2</h1>
				
				<SistersCar brand = {carname} />
			</div>
		);
	}
}

ReactDOM.render(<Garage2 />, document.getElementById('SisterCar'));

/**
 * Passing an object
 */
class DadsCar extends React.Component {
	render() {
		return <h4>Dad has a {this.props.brand.model} type of car.</h4>
	}
}

class Garage3 extends React.Component {
	render() {
		const carInfo = {name: "Benz", model: "S-Model"};
		
		return (
			<div>
				<h1>Bought from Garage 3.</h1>
				
				<DadsCar brand = {carInfo} />
			</div>
		);
	}
} 

ReactDOM.render(<Garage3 />, document.getElementById('DadCar'));

/**
 * Props in the Constructor
 */

class mothersCar extends React.Component {
	constructor(props){
		super(props);
	}
	return() {
		return <h2>This is another Car.</h2>;
	}
}
/**
 * Remember: React props are read-only and cannot be changed.
 */


/**
 * React Components have an in-built state object. This object is where you store property values.
 */

 class WorkCar extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             brand: "Ford",
             model: "Mustang",
             color: "Black",
             year: 1985
         };
     }

     render(){
         return (
             <div>
                 <h1>My Work Car</h1>
                 <p>
                    It is a {this.state.color}
                    {this.state.brand} {this.state.model}
                    from {this.state.year}.
                 </p>
             </div>
         );
     }
 }

ReactDOM.render(<WorkCar />, document.getElementById("myWorkCar"));

/**
 * To change the property value with a state object we call on the method setState(), passing what we want to change. This call can be stored within a function that is called on a button click.
 */

 class MyBike extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            brand: "Triumph",
            model: "T-Series",
            color: "Red",
            year: 2020
         };
     }

     changeColour = () => {
         this.setState({ color: "Blue" });
     }

     render() {
         return(
             <div>
                 <h1>This is my { this.state.brand } bike.</h1>
                 <p>
                     It is a { this.state.color }
                     { this.state.model }
                     from { this.state.year }.
                 </p>
                 <button type="button" onClick={this.changeColour}>Change Colour</button>
             </div>
         );
     }
 }

 ReactDOM.render(<MyBike />, document.getElementById('changeBike'));


 //Coming from lifecycle.js
 ReactDOM.render(<Header />, document.getElementById('favouriteColour'));
 ReactDOM.render(<Header1 favMusic = "Rap" />, document.getElementById('myMusic'));
 ReactDOM.render(<Header2 />, document.getElementById('myFood'));
 ReactDOM.render(<Header3 favcol = "yellow"/>, document.getElementById('colourChange'));
 ReactDOM.render(<Header4 />, document.getElementById('favColor'));
 ReactDOM.render(<Header5 />, document.getElementById('changingColour'));
 ReactDOM.render(<Header6 />, document.getElementById('deletingContainer'));


/**
 * Declaring a function, a button that calls the function and linking to the frontend.
 */

function shoot() {
    alert("Great Shot!");
  }

const myelementShot = (
    <button onClick={shoot}>Take the shot!</button>
);
  
ReactDOM.render(myelementShot, document.getElementById('myShotElement1'));

ReactDOM.render(<Football />, document.getElementById('componentButton'));

ReactDOM.render(<Basketball />, document.getElementById('Basket'));

ReactDOM.render(<Golf />, document.getElementById('golfDiv'));

ReactDOM.render(<MyForm />, document.getElementById('FormElm'));
ReactDOM.render(<MyForm2 />, document.getElementById('FormElm2'));
ReactDOM.render(<MyForm3 />, document.getElementById('FormElm3'));
ReactDOM.render(<MyForm4 />, document.getElementById('FormElm4'));
ReactDOM.render(<MyForm5 />, document.getElementById('FormElm5'));
ReactDOM.render(<MyForm6 />, document.getElementById('FormElm6'));
ReactDOM.render(<MyForm7 />, document.getElementById('FormElm7'));
ReactDOM.render(<MyForm8 />, document.getElementById('FormElm8'));
ReactDOM.render(<MyForm9 />, document.getElementById('FormElm9'));

ReactDOM.render(<MyStyle />, document.getElementById('styleElm1'));
ReactDOM.render(<MyStyle2 />, document.getElementById('styleElm2'));
ReactDOM.render(<MyStyle3 />, document.getElementById('styleElm3'));
ReactDOM.render(<MyStyle4 />, document.getElementById('styleElm4'));
ReactDOM.render(<MyStyle5 />, document.getElementById('styleElm5'));
ReactDOM.render(<MyStyle6 />, document.getElementById('styleElm6'));

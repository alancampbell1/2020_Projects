import React from 'react';
import ReactDOM from 'react-dom';
import styles from './myMStyle.module.css'; 

class MyStyle5 extends React.Component {

	render() {

		return <h1 className={styles.bigBlue}>Hello Car!</h1>;
	}
}

export default MyStyle5;
import React from 'react';

import { Button } from './Button'
import { TopBar } from './TopBar'
import { TopBarContent } from './TopBar/TopBarContent'
import { Container } from './Container'

export class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			number: 2,
			numbers: [1,2],
			mappedNumbers: [],
			filteredNumbers: [],
			reducedNumbers: 0
		}

		this.addToArray = this._addToArray.bind(this);
		this.clearArray = this._clearArray.bind(this);
	}



	_addToArray(){

		const index = this.state.number + 1;
		const newNumbers = this.state.numbers.concat([index]);
		this.setState({ number: index , numbers: newNumbers});
	}

	_clearArray(){
		const newNumbers = [1,2];
		const index = 2;
		this.setState({ number: index , numbers: newNumbers});
	}


	render() {
		return (
			<div>
				<Container></Container>
			</div>

		);
	}
}

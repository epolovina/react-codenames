import React, { Component } from 'react';
import "./ScoreBoard.css";

class ScoreBoard extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showResults: false,
			blue: 0,
			red: 0
		}
		this.checkWin = this.checkWin.bind(this)
	}

	componentDidMount() {
		console.log("compDidMount");
		const self = this;
		document.addEventListener("selectionFired", function (e) {
			self.setColourScore(e.detail.colour);
		});
	}

	setColourScore(colour) {
		console.log("setColourScore: " + colour);
		let blue = this.state.blue;
		let red = this.state.red;
		switch(colour) {
			case 'primary':
				this.setState({blue: blue+1})
				break;
			case 'danger':
				this.setState({red: red+1})
				break;
			case 'dark':
				alert("You done fawked up")
				break;
			default:
				break;
		}
		this.checkWin();
	}

	checkWin() {
		let blue = this.state.blue;
		let red = this.state.red;
		if (blue === 8) {
			alert("Blue won");
		} else if (red === 8) {
			alert("Red won");
		}
	}

    render() {
		return (
			<div className="scoreContainer">
				<h1>Score</h1>
				<h3>Blue: {this.state.blue} | Red: {this.state.red}</h3>
			</div>
		);
	}
}

export default ScoreBoard;
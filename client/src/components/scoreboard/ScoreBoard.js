import React, { Component } from 'react';
import "./ScoreBoard.css";

class ScoreBoard extends Component {
	constructor() {
		super();
		
		this.state = {
			showResults: false,
		}
    }

    render() {
		// const [showResults, setShowResults] = useState(false);
		return (
			<div className="scoreContainer">
				<h1>Score</h1>
				{/* {this.showResults ?  this.showField() : null} use states */}
			</div>
		);
	}
}

export default ScoreBoard;
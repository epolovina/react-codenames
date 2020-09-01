import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

import "./Hint.css";

class Hint extends Component {
	constructor() {
		super();
		// const [showResults, setShowResults] = useState(false);
		
		this.state = {
			showResults: false,
		}
	}

	hintSubmit = () => {
		console.log("Submittedaasdfasdfasd");
		this.showResults = true;
		var test = document
			.getElementsByClassName("formHint")[0]
			.setAttribute("readonly", true)
		console.log(test);
		// const onClick = () => setShowResults(true)
	}

	showField = () => {
		console.log("in showField");
		return (
			<div id="results" className="search-results">
				Some Results
			</div>
		)
	}

	render() {
		// const [showResults, setShowResults] = useState(false);
		return (
			<div className="formContainer">
				<InputGroup className="mb-3 inputField">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1">Hint</InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						placeholder="Hint"
						aria-label="Username"
						aria-describedby="basic-addon1"
						className="formHint"
					/>
					<InputGroup.Append>
						<Button className="submitBtn" onClick={this.hintSubmit} variant="outline-secondary">Submit</Button>
					</InputGroup.Append>
				</InputGroup>
				{/* {this.showResults ?  this.showField() : null} use states */}
			</div>
		);
	}
}

export default Hint;

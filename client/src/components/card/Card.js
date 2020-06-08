import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      black: true,
      blue: true,
      red: true,
      color: 0
    }
  }

  showCard() {
    console.log(this.props);
    console.log(this.state);
    
    if (this.props.color == "dark") {
      this.setState({
        color: 1
      });
    }
    else if(this.props.color == "blue") {
      this.setState({
        color: 2
      });
    }
    else if (this.props.color == "red") {
      this.setState({
        color: 3
      });
    }
  }

  render() {
    let setColor;
    if(this.state.color == 1) {
      setColor = "dark";
    }
    else if (this.state.color == 2) {
      setColor = "primary"
    }
    else if (this.state.color == 3) {
      setColor = "danger"
    }
    else {
      setColor = "outline-primary"
    }
    
    // let setBlack = this.state.black ? "outline-primary" : "dark"
    // let setBlue = this.state.black ? "outline-primary" : "primary"
    // let setRed = this.state.black ? "outline-primary" : "danger"

    const props = this.props;
    return (
      <Button variant={setColor} className="card-body buttonClicked" onClick={this.showCard.bind(this)}>
        {this.props.name}
      </Button>
    );
  }
}

export default Card;

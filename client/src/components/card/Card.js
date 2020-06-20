import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      colour: true,
      clicked: false
    }
  }

  changeColor() {
    if (!this.clicked) {
      this.setState({colour: !this.state.colour});
      this.clicked = true;
    }
  }

  render() {
    let setColor;
    setColor = this.state.colour ? "outline-primary" : this.props.color;
    return (
      <Button variant={setColor} className="card-body buttonClicked" onClick={this.changeColor.bind(this)} >
        {this.props.name}
      </Button>
    );
  }
}

export default Card;

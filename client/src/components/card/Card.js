import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      isColour: true,
      clicked: false
    }
  }

  changeColor() {
    if (!this.clicked) {
      this.setState({isColour: !this.state.isColour});
      this.clicked = true;
    }
    var selectionFired = new CustomEvent("selectionFired", {
      "detail": {"colour": this.colour}
    });
    document.dispatchEvent(selectionFired);
  }

  render() {
    let setColor;
    setColor = this.state.isColour ? "outline-primary" : this.props.color;
    this.colour = this.props.color;
    return (
      <Button variant={setColor} className="card-body buttonClicked" onClick={this.changeColor.bind(this)} >
        {this.props.name}
      </Button>
    );
  }
}

export default Card;

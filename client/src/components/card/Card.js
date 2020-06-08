import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <Button variant="outline-primary" className="card" >
        {this.props.name}
      </Button>
    );
  }
}

export default Card;

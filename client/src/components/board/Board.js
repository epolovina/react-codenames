import React, { Component } from "react";
import Card from "../card/Card";
import "./Board.css";

class Board extends Component {
  renderCard(i, color) {
    return <Card name={i} color={color}/>;
  }

  getColor() {
    var num = Math.floor(Math.random() * Math.floor(3));
    var color;
    if(num == 1) {
      color = "blue";
    }
    else if (num == 2) {
      color = "red";
    } else {
      color = "dark";
    }
    return color;
  }

  createRows(n) {
    let rows = [];
    for (var i = 0; i < n; i++) {
      let squares = [];
      for (var j = 0; j < n; j++) {
        let tile = n * i + j;

        squares.push(this.renderCard(tile, this.getColor()));
      }
      rows.push(<div className="board-row">{squares}</div>);
    }
    return rows;
  }

  render() {
    return <div>{this.createRows(5)}</div>;
  }
}

export default Board;

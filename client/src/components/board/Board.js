import React, { Component } from "react";
import Card from "../card/Card";
import "./Board.css";

class Board extends Component {
  renderCard(i) {
    return <Card name={i} />;
  }

  createRows(n) {
    let rows = [];
    for (var i = 0; i < n; i++) {
      let squares = [];
      for (var j = 0; j < n; j++) {
        squares.push(this.renderCard(n * i + j));
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

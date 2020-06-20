import React, { Component } from "react";
import Card from "../card/Card";
import "./Board.css";

class Board extends Component {
  constructor() {
    super()
    this.blue = 8;
    this.red = 8;
    this.black = 1;
  }
  renderCard(i, color) {
    return <Card name={i} color={color}/>;
  }

  getColor() {
    let list = {};
    let primary = 8;
    let danger = 8;
    let warning = 8;
    let dark = 1;
    for (var i = 0; i < 25; i++) {
      let set = false;
      while (!set) {
        let num = Math.floor(Math.random() * Math.floor(4));
        if(num === 0 && primary !== 0) {
          list[i] = "primary";
          primary--;
          set = true;
        } else if (num === 1 && danger !== 0) {
          list[i] = "danger";
          danger--;
          set = true;
        } else if (num === 2 && dark !== 0) {
          list[i] = "dark";
          dark--;
          set = true;
        } else if (num === 3 && warning !== 0){
          list[i] = "warning";
          warning--;
          set = true;
        }
      }
    }
    return list;
  }

  createRows(n) {
    let list = this.getColor();
    let rows = [];
    for (var i = 0; i < n; i++) {
      let squares = [];
      for (var j = 0; j < n; j++) {
        let tile = n * i + j;
        let color = list[tile];
        squares.push(this.renderCard(tile, color));
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

import React, { Component } from "react";
import Card from "../card/Card";
import axios from "axios";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.blue = 8;
    this.red = 8;
    this.black = 1;
    this.state = {
      rows: [],
    };
    this.chosenWords = new Set();
  }

  renderCard(i, color) {
    return <Card key={i.toString()} name={i} color={color} />;
  }

  async getCategories() {
    try {
      let res = await axios.get("http://localhost:4001/initializeBoard");
      let data = res.data;
      // this will re render the view with new data
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("finished network request");
  }

  async componentDidMount() {
    this.createRows(5);
    console.log("component mounted");
  }

  async createRows(n) {
    let rows = [];
    let categories = await this.getCategories();
    
    let items = categories;

    console.log("items", items);
    console.log("creating rows");

    for (var i = 0; i < n; i++) {
      let squares = [];

      for (var j = 0; j < n; j++) {
        let tile = n * i + j;
        squares.push(this.renderCard(await categories[tile].word, categories[tile].color));
      }
      rows.push(
        <div key={"row-" + i} className="board-row">
          {squares}
        </div>
      );
    }
    this.setState({ rows: rows });
  }

  render() {
    return <div className="mainBoard" key="mainBoardDiv">{this.state.rows}</div>;
  }
}

export default Board;

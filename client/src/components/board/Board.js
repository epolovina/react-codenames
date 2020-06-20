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
      let res = await axios.get("http://localhost:4001/categories");
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

  async pickRandomWord(categoryArray) {
    let length = categoryArray.length;

    let num = Math.floor(Math.random() * length);
    if (!this.chosenWords.has(num)) {
      this.chosenWords.add(num);
      return categoryArray[num].toUpperCase();
    } else {
      num = Math.floor(Math.random() * length);
      while (this.chosenWords.has(num)) {
        num = Math.floor(Math.random() * length);
      }
      this.chosenWords.add(num);
      return categoryArray[num].toUpperCase();
    }
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
        if (num === 0 && primary !== 0) {
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
        } else if (num === 3 && warning !== 0) {
          list[i] = "warning";
          warning--;
          set = true;
        }
      }
    }
    return list;
  }

  async createRows(n) {
    let list = this.getColor();
    let rows = [];
    let categories = await this.getCategories();

    let items = categories[0].categories;

    console.log("items", items);
    console.log("creating rows");

    for (var i = 0; i < n; i++) {
      let squares = [];

      for (var j = 0; j < n; j++) {
        let tile = n * i + j;
        let color = list[tile];
        squares.push(this.renderCard(await this.pickRandomWord(items), color));
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

import React, { Component } from "react";
import Card from "../card/Card";
import axios from "axios";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
    this.chosenWords = new Set();
  }

  renderCard(i) {
    return <Card key={i.toString()} name={i} />;
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

  async createRows(n) {
    let rows = [];
    let categories = await this.getCategories();

    let items = categories[0].categories;

    console.log("items", items);
    console.log("creating rows");

    for (var i = 0; i < n; i++) {
      let squares = [];

      for (var j = 0; j < n; j++) {
        squares.push(this.renderCard(await this.pickRandomWord(items)));
      }
      rows.push(<div key={"row-"+i} className="board-row">{squares}</div>);
    }
    this.setState({ rows: rows });
  }

  render() {
    return <div key="mainBoardDiv" >{this.state.rows}</div>;
  }
}

export default Board;

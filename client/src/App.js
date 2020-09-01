import "./App.css"
import React from "react";
// import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import Hint from "./components/hint/Hint";
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  // const [response, setResponse] = useState("");

  // useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("join", "room");
    socket.on("connectToRoom", (data) => {
      console.log("connected!!!");
      console.log(data);
    });
    // socket.on("FromAPI", (data) => {
    //   setResponse(data);
    // });
    socket.on("disconnect", (data) => {
      console.log("Client disconnected");
    });
  // }, []);

  return (
    <div>
      {/* It 's <time dateTime={response}>{response}</time> */}
      <ScoreBoard />
      <Board />
      <Hint />
    </div>
  );
}

export default App;

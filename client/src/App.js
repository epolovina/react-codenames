import "./App.css"
import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("join", "room");
    socket.on("connectToRoom", (data) => {
      console.log("connected!!!");
      console.log(data);
    });
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      It 's <time dateTime={response}>{response}</time>
      <Board />
    </div>
  );
}

export default App;

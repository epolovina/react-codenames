import React, { useState, useEffect } from "react";
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
    <p>
      It 's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;

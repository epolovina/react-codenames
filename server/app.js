const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;
let room = "room";
let roomno = 1;
io.on("connection", (socket) => {
  socket.emit("connection", "connected");
  console.log("New client connected");

  socket.on("join", (data) => {
    socket.join(room);
    io.sockets
      .in("room")
      .emit("connectToRoom", "You are in room number: " + roomno);
  });

  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    io.sockets
      .in("room")
      .emit("disconnect", "Client disconnected");
    // clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const time = new Date();
  let response =
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    "." +
    time.getMilliseconds();
  // Emitting a new message. Will be consumed by the client
  io.sockets.in("room").emit("FromAPI", response);
  //  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));

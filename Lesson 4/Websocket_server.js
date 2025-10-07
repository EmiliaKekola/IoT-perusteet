const Websocket = require("ws");

const server = new Websocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    console.log("Received: ", message.toString());
    socket.send(`Echo: ${message}`);
  });
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

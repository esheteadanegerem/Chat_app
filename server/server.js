
const express = require("express");
const http = require("http"); // Required for creating a server
const { Server } = require("socket.io"); // Import Socket.IO
const cors = require("cors");

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("WebSocket Server Running");
});

// WebSocket Connection
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for messages from clients
  socket.on("chatMessage", (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit("chatMessage", msg); // Broadcast message to all clients
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

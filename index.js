let express = require("express");

let app = express();

//socket
let socket = require("socket.io");
// server setup
let server = app.listen(4000, () => {
  console.log("application is running on port 4000");
});

//route setup
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/index.html");
});

//socket setup
let io = socket(server);
io.on("connection", (socket) => {
  console.log("User is connected" + socket.id);
});

let express = require("express");

let app = express();

// server setup
let server = app.listen(3000, () => {
  console.log("application is running on port 3000");
});

//route setup
app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/index.html");
});

let express = require("express");
// server setup
let server = express().listen(3000, () => {
  console.log("application is running on port 3000");
});

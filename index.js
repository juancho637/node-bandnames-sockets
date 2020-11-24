const express = require("express");
const path = require("path");
require("dotenv").config();

// App Express
const app = express();

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port: ", process.env.PORT);
});

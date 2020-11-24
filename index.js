const express = require("express");
const app = express();
require("dotenv").config();


app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port: ", process.env.PORT);
});

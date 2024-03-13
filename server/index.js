const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Middleware
app.use(corse());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

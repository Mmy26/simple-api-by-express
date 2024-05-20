const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

const object = {
  text: "hello world!",
};

app.get("/", cors(), (req, res) => {
  res.send(object);
});

app.get("/about", cors(), (req, res) => {
  res.send("About route 🎉 ");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

const express = require("express");

const app = express();

const port = 3000;

const memos = ["메모1", "메모2", "메모3", "메모4", "메모5", "메모6", "메모7", "메모8"];

// respond with "hello world" when a GET request is made to the homepage
app.get("/api/memos", (req, res) => {
  res.status(202).send(memos);
});

// app.get("/api", (req, res) => {
//   console.log("!@#$%^&*() test");
//   res.status(202).send(memos);
// });

app.listen(port, () => {
  console.log(`connected ${port} server`);
});
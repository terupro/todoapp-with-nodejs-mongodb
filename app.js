const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const PORT = 4000;

app.listen(PORT, console.log("サーバーが起動しました"));

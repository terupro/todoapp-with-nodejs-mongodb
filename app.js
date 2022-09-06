const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const PORT = 4000;

app.use("/api/tasks", taskRoute);

app.listen(PORT, console.log("サーバーが起動しました"));

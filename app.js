const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const PORT = 4000;
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

// ルーティング設計
app.use("/api/tasks", taskRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバーが起動しました"));
  } catch (err) {
    console.log(err);
  }
};

start();

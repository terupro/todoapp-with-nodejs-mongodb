const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const PORT = 4000;
const connectDB = require("./db/connect");

// ルーティング設計
app.use("/api/tasks", taskRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://terupro:terupro1914911M@cluster0.yzomryk.mongodb.net/todoapp?retryWrites=true&w=majority"
    );
    app.listen(PORT, console.log("サーバーが起動しました"));
  } catch (err) {
    console.log(err);
  }
};

start();

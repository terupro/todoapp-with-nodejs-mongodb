const express = require("express");
const router = express.Router();

router.get("/api/tasks", (req, res) => {
  res.send("タスクを全て取得しました");
});
router.post("/api/tasks", (req, res) => {
  res.send("タスクを新規作成しました");
});
router.get("/api/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを取得しました");
});
router.patch("/api/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを更新しました");
});
router.delete("/api/tasks/:id", (req, res) => {
  res.send("ある特定のタスクを削除しました");
});

module.exports = router;

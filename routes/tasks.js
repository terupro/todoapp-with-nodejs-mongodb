// ルーティング専用のファイル

const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("/../controllers/tasks");

router.get("/api/tasks", getAllTasks);
router.post("/api/tasks", createTask);
router.get("/api/tasks/:id", getSingleTask);
router.patch("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;

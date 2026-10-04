const express = require("express");

const protect = require("../middleware/auth");

const {
  validateTask
} = require("../middleware/validation");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.use(protect);

router.post("/", validateTask, createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", validateTask, updateTask);
router.delete("/:id", deleteTask);

module.exports = router;

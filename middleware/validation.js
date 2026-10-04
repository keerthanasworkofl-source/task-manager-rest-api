const AppError = require("../utils/AppError");

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email and password are required"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  next();
};

const validateTask = (req, res, next) => {
  if (
    req.body.title !== undefined &&
    (!req.body.title || !req.body.title.trim())
  ) {
    return res.status(400).json({
      message: "Task title cannot be blank"
    });
  }

  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateTask
};

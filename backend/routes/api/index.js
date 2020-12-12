const router = require("express").Router();
const userRoutes = require("./users");

// adds second parameter to url: '/api/users'
router.use("/users", userRoutes);

module.exports = router;

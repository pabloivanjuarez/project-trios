const router = require("express").Router();
const userRoutes = require("./users");
const serviceRoutes = require("./serviceRoutes")

// adds second parameter to url: '/api/users'
router.use("/users", userRoutes);

module.exports = router;

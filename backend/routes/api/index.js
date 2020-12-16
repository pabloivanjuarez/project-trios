const router = require("express").Router();
const userRoutes = require("./users");
const servicesRoutes = require("./services");
// adds second parameter to url: '/api/users'
router.use("/users", userRoutes);
router.use("/services", servicesRoutes);

module.exports = router;

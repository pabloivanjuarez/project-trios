const router = require("express").Router();

const serviceRoutes = require("./services")

// adds second parameter to url: '/api/services'
router.use("/services", serviceRoutes);


module.exports = router;

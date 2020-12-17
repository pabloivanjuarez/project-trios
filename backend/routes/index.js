const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// starts url parameter with "/api"
router.use("/api", apiRoutes);

//if no api hits found, send React App
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

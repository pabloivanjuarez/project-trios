const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");
console.log("are you working?")
// Matches with "/api/services"
router.route("/")
  .get(servicesController.findAll)
  .post(servicesController.create);

// Matches with "/api/services/:id"
router
  .route("/:id")
  .get(servicesController.findById)
  .put(servicesController.update)
  // .delete(servicesController.remove);

module.exports = router;
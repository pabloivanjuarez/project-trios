const router = require('express').Router();
const servicesController = require('../../controllers/servicesController');

// Matches with "/api/services"
router
  .route('/')
  .get(servicesController.findAll)
  .post(servicesController.create);

// Matches with "/api/services/:id"
router
  .route('/:id')
  .get(servicesController.findById)
  .put(servicesController.update)
  .delete(servicesController.delete);

module.exports = router;

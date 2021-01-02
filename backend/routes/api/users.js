const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router.route('/').post(usersController.create);
//   .get(userController.findAll)

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;

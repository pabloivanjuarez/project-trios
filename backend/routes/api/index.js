const router = require('express').Router();
const serviceRoutes = require('./services');
const userRoutes = require('./users');

router.use('/services', serviceRoutes);
router.use('/users', userRoutes);

module.exports = router;

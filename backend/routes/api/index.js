const router = require('express').Router();
const serviceRoutes = require('./services');
const userRoutes = require('./users');

// adds second parameter to url: '/api/services'
router.use('/services', serviceRoutes);

// Adds a second parameter to url: '/api/users' [1/1/21 CS]
router.use('/users', userRoutes);

module.exports = router;

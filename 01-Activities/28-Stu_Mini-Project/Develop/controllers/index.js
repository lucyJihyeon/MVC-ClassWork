const router = require('express').Router();
const apiRoutes = require('./api');
const defaultRoutes = require('./home');
router.use('/api', apiRoutes);
router.use('/', defaultRoutes);

module.exports = router;

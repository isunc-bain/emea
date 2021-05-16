const router = require('express').Router();

router.use('/books', require('./books'));
router.use('/ping', require('./ping'));

module.exports = router;

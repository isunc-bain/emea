const router = require('express').Router();

// healthcheck API
router.get('', (req, res) => res.send('pong'));

module.exports = router;

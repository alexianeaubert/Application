let router = require('express').Router();
let controller = require('../controllers');

router.get('/', (req, res) => {
    controller.user(req, res);
});

module.exports = router;
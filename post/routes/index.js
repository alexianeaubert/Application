let router = require('express').Router();
let controller = require('../controllers');

router.get('/newPost', (req,res) => {
    controller.post(req, res);
});

router.post('/newPost', (req,res) => {
    controller.postProcess(req, res);
});

module.exports = router;
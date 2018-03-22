let router = require('express').Router();
let controller = require('../controllers');

router.get('/friends', (req,res) => {
    controller.friend(req, res);
});

router.get('/friends/:username', (req,res) => {
    console.log("bonjour");
    console.log(req.params.username);
    controller.friendProcess(req, res);
});

module.exports = router;
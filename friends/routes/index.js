let router = require('express').Router();
let controller = require('../controllers');

router.get('/friends', (req,res) => {
    controller.friend(req, res);
});

router.get('/friends/:_id', (req,res) => {
    controller.friendProcess(req, res);
});

router.get('/unfriends/:_id', (req,res) => {
    controller.unFriendProcess(req, res);
   
});

module.exports = router;
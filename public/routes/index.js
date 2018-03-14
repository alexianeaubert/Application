let router = require('express').Router();
let controller = require('../controllers');

router.get('/', (req, res) => {
    controller.homepage(req, res);
});

// let router = require('express').Router();
// router.get('/', (req, res) => {
//     res.send("Homepage");
// });
// req : requête émise par le client, à savoir la route ou url qu'il a choisi.
// res : restituer le message que je veux afficher.


router.get('/team', (req, res) => {
    controller.team(req, res);
});


router.get('/contact', (req, res) => {
    controller.contact(req, res);
});

router.get('/about', (req, res) => {
    controller.about(req, res);
});


module.exports = router;





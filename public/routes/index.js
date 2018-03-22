let router = require('express').Router();
let controller = require('../controllers');


// let router = require('express').Router();
// router.get('/', (req, res) => {
//     res.send("Homepage");
// });


router.get('/homepage', (req, res) => {
    controller.homepage(req, res);
});

// req : requête émise par le client, à savoir la route ou url qu'il a choisi.
// res : restituer le message que je veux afficher.

module.exports = router;





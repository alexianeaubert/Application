let router = require('express').Router();
let controller = require('../controllers');

router.get('/signin', (req,res) => {
    controller.signin(req, res);
});

router.post('/signin', (req,res) => {
    controller.signinProcess(req, res);
});



module.exports = router;


// let router = require('express').Router();
// let controller = require('../controllers');

// router.post('/signin', (req, res) => {
//     controller.signin(req, res);
// });

// module.exports = router;

// router.use(function(req,res,next){
// 	if(req.query._method == 'DELETE'){
// 		req.method = 'DELETE';
// 		req.url = req.path;
// 	}
// 	if(req.query._method == 'PUT'){
// 		req.method = 'PUT';
// 		req.url = req.path;
// 	}
// 	next();
// });
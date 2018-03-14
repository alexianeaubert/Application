let router = require('express').Router();
let controller = require('../controllers');

router.post('/profil',(req,res)=>{
  controller.profil(req,res);
});

router.get('/profil',(req,res)=>{
  controller.profil(req,res);
});

module.exports=router;

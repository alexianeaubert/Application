// function profil(req, res) {
//   let process = require('../../post/utilities/index.js');
//   process.findPosts(req,res);
// }
function profil(req, res) {

  let mdp = req.body.password;
  let profil = req.body.username;

  let process = require('../utilities/index.js');
  process.findPosts(req,res);
  
}



module.exports.profil = profil;
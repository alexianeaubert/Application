// function profil(req, res) {
//   let process = require('../../post/utilities/index.js');
//   process.findPosts(req,res);
// }
function profil(req, res) {
  res.render('profil', {user : req.session.user});
}
module.exports.profil = profil;
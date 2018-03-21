function verifUser(req, res){
   let User = require('../../user/models/user');
   let login = req.body.username;
   let password = req.body.password;

   User.findOne({'local.username' : login}, function(err, user){
      if(err) throw err;
      if(user){
         if(user.comparePassword(password)){
               req.session.user = user;
               res.redirect('/profil');
         }
         else res.send("Mauvais mot de passe");
      }
      else res.send("Cet utilisateur n'existe pas");
   });

}

module.exports.verifUser = verifUser;

function addUser(req, res) {
   let User = require('../models/user');
   let user = new User();
   user.local.firstName = req.body.firstName;
   user.local.lastName = req.body.lastName;
   user.local.username = req.body.username;
   user.local.password = req.body.password;

   User.findOne({'local.email' : req.body.email}, function(err, present) {
       if (err) throw err;
       if (present) {
           res.send('Cet email est déjà utilisé');
       } else {
           user.local.email = req.body.email;
           user.save((err, user) => {
               if (err) throw err;
            //    res.session.user = user;
               res.redirect('/signin');
           });
       }

   });

}



module.exports.addUser = addUser;
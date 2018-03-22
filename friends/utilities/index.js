let mongoose = require('mongoose');

function addFriend(req, res) {

    // console.log("bonjour on est entré dans la fonction")
    let Friend = require('../models/friend');
    let friend = new Friend();
    friend.user = req.session.user._id;
    friend.friend = req.params.username;

    res.redirect('/friend');
    friend.save((err, post) => {
        if (err) throw err;
        
    })

}

function findUsers(req,res){

    let User =require('../../user/models/user');
    let id = mongoose.Types.ObjectId(req.session.user._id);
    User.find({'_id':{'$ne':id}},function(err,users){
        if (err) throw err;
        res.render('friend', {users:users})
    });

}
  
module.exports.findUsers = findUsers;
module.exports.addFriend = addFriend;


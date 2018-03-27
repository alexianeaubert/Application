let mongoose = require('mongoose');

function findPosts(req,res){
    //On cherche les users avec le username qui est rentré
    let Post = require('../../post/models/post');
    let id = mongoose.Types.ObjectId(req.session.user._id);
    let Friend = require('../../friends/models/friends');
    tableauAmi = [];

    Post.find({'user': id},function(err,posts){
        if (err) throw err;

        // res.render('profil', {nom : req.session.user.local.username, posts:posts});

        Friend.find({'user':id}, function(err,amis){
            if (err) throw err;
            amis.forEach(function(ami){
                tableauAmi.push(ami.friend);
            });

            Post.find({'user':{'$in':tableauAmi}}).populate('user').exec(function(err, postsAmi){
                if (err) throw err;
                res.render('profil', {nom: req.session.user.local.username, posts: posts, postsAmi:postsAmi});
            });
        });
    });
    
};
  
module.exports.findPosts = findPosts;

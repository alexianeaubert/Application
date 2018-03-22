let mongoose = require('mongoose');

function findPosts(req,res){
    //On cherche les users avec le username qui est rentré
    let Post =require('../../post/models/post');
    let id = mongoose.Types.ObjectId(req.session.user._id);

    Post.find({'user': id},function(err,posts){
        if (err) throw err;
        console.log(posts);
        res.render('profil', {nom : req.session.user.local.username, posts:posts});
        
    });
}
  
module.exports.findPosts = findPosts;
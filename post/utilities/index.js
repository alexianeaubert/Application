function addPost(req, res) {
    
    let Post = require('../models/post');
    let post = new Post();
    let mongoose = require('mongoose');

    console.log(req.session);
    
    post.user = mongoose.Types.ObjectId(req.session.user._id);
    post.title = req.body.title;
    post.description = req.body.description;

    console.log(post);

    post.save((err, post) => {
        if (err) throw err;
        console.log("titre post :"+post.title);
        console.log("description post :"+post.description);
        console.log("username :"+post.user);
        res.redirect('/profil');
    })
}

// function findPosts(req, res){
//     let Post = require('../models/post');
//     let post = new Post();
//     post.title = req.body.title;
//     console.log("titre post :"+post.title);
//     res.render('/profil')
// }

module.exports.addPost = addPost;



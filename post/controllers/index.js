function post(req, res) {
   console.log(req.session.user)
   res.render('newPost');
}

function postProcess(req, res){
   let process = require('../utilities');
   process.addPost(req,res);
   
}

module.exports.post = post;
module.exports.postProcess = postProcess;
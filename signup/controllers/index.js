function signup(req, res) {
    res.render('signup');
}

function signupProcess(req, res){
    let process = require('../../user/utilities/index.js');
    process.addUser(req,res);
    //s'il est inscrit on l'emmène vers signin
    
}



module.exports.signup = signup;
module.exports.signupProcess = signupProcess;
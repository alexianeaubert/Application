function homepage(req, res){
    res.render('Homepage');
    // Remplacement de :
    // res.send('Homepage');
}


function signup(req, res){
    res.render('Signup');
}

module.exports.homepage = homepage;
module.exports.signup = signup;
function homepage(req, res){
    res.render('homepage');
    // Remplacement de :
    // res.send('Homepage');
}

function team(req, res){
    res.render('Team');
    // res.send('Team');
}

function contact(req, res){
    res.render('Contact');
    // res.send('Contact');
}

function about(req, res){
    res.render('About');
    // res.send('About');
}

function signin(req, res){
    res.render('Signin');
}

module.exports.homepage = homepage;
module.exports.team = team;
module.exports.contact = contact;
module.exports.about = about;
module.exports.signin = signin;
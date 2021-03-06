let express = require("express");
let app = express();
// Les deux premières lignes permettent de :
// Express récolte les demandes des clients (requêtes HTP) et les envoie aux fonctions les gérant
let cfgServer = require('./core/config/server');
let cfgDatabase = require('./core/config/database');

let path = require('path');
let dirViews = [
    path.join(__dirname, './public/views/pages'),
    path.join(__dirname, './signup/views/pages'),
    path.join(__dirname, './signin/views/pages'),
    path.join(__dirname, './profil/views/pages'),
    path.join(__dirname, './post/views/pages'),
    path.join(__dirname, './friends/views/pages')];
app.set('views', dirViews);
app.set('view engine', 'ejs');

let session = require('express-session');
app.use(session({secret:"ma phrase", resave:true, saveUninitialized:true}));

let mongoose = require('mongoose');
mongoose.connect(cfgDatabase.url, function(err) {
    if(err) throw err;
    else {
        console.log("Database connected ! :D");
    }
});


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ({
    extended : true
}));
app.use(bodyParser.json());


let publicRoutes = require('./public/routes');
let signinRoutes = require('./signin/routes');
let signupRoutes = require('./signup/routes');
let profilRoutes = require('./profil/routes');
let userRoutes = require('./user/routes');
let postRoutes = require('./post/routes');
let friendRoutes = require('./friends/routes');
app.use(publicRoutes);
app.use(signinRoutes);
app.use(signupRoutes);
app.use(profilRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use(friendRoutes);


app.listen(cfgServer.port);
console.log("Express server running on " + cfgServer.port);

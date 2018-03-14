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
    path.join(__dirname, './profil/views/pages')];
app.set('views', dirViews);
app.set('view engine', 'ejs');


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
app.use(publicRoutes);
app.use(signinRoutes);
app.use(signupRoutes);
app.use(profilRoutes);
app.use(userRoutes);

// app.get("*", (req, res) => {
//     res.send("Express response");
// });
// Quelque soit la requête("*") singifie : j'affiche le message "Express response".

//app.listen(3000);
// Je lance le server en localhost et avec le port 3000.
app.listen(cfgServer.port);
console.log("Express server running on " + cfgServer.port);

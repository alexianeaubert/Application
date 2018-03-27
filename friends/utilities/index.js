////////////////REQUÊTE////////////////

let mongoose = require('mongoose');

function findUsers(req,res){

    let User = require('../../user/models/user');
    let Friend = require('../../friends/models/friends');
    // Ici on appel les models
    let MonId = mongoose.Types.ObjectId(req.session.user._id);
    //MonId récupère l'id de la personne connectée
    let Tableau = [];
    


    Friend.find({'user':MonId}, function(err,users){
        //Le Friend au dessus c'est ma table
        //users en violet c'est le résultat de ma requête : c'est un tableau
        if (err) throw err;
        users.forEach(function(couple){
        //couple en violet entre parenthèse c'est un couple friend/user
            // couple.friend(Tableau.push);
            Tableau.push(couple.friend);
        });

            //Fonction qui va me permettre de me cacher et de cacher ceux que je ne suis pas
            // Faire une deuxième fonction pour récupérer ce que je follow déjà
            User.find({ $and: [{'_id':{'$ne':MonId}}, {'_id':{'$nin':Tableau}}]},function(err,users){
                if (err) throw err;
                //$ne : négatif
                //$in : permet de sélectioner tous les éléments qui sont dans mon tableau
                //$nin : inverse de in
                User.find({ $and: [{'_id':{'$ne':MonId}},{'_id':{'$in':Tableau}}]},function(err,unUsers){
                    if (err) throw err;
                    res.render('friend', {users:users, unUsers:unUsers});
                });
            });
    });
}


function addFriend(req, res) {

    let Friend = require('../models/friends');
    let friend = new Friend();
    friend.user = mongoose.Types.ObjectId(req.session.user._id);
    friend.friend = req.params._id;

    friend.save((err, post) => {
        if (err) throw err;
        res.redirect('/friends');
    })

}


function removeFriend(req, res) {

    let Friend = require('../models/friends');
   
    Friend.findOneAndRemove({'friend':req.params._id}, function(err,users){
        if (err) throw err;
        res.redirect('/friends');
    });

}
  
module.exports.findUsers = findUsers;
module.exports.addFriend = addFriend;
module.exports.removeFriend = removeFriend;

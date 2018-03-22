/////////////DESCRIPTION DE MA BASE///////////

let mongoose = require('mongoose');
// let bcrypt = require('bcrypt-node.js');
let Schema = mongoose.Schema;

let FriendsSchema = new Schema ({

   user : {
         //user c'est un Id
      type : Schema.Types.ObjectId, ref : 'User'},
   friend :{
         //friend c'est un Id
      type : Schema.Types.ObjectId, ref : 'User'},

      //Les deux font référence à un objet user

});
 
 module.exports = mongoose.model('Friends', FriendsSchema);
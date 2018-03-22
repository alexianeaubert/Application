let mongoose = require('mongoose');
// let bcrypt = require('bcrypt-node.js');
let Schema = mongoose.Schema;

let FriendsSchema = new Schema ({

   user : {
      type : Schema.Types.ObjectId, ref : 'User'},
   friend :{
      type : Schema.Types.ObjectId, ref : 'User'},

});
 
 module.exports = mongoose.model('Friends', FriendsSchema);
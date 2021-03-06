let mongoose = require('mongoose');
// let bcrypt = require('bcrypt-node.js');
let Schema = mongoose.Schema;

let PostSchema = new Schema ({

   title : String,
   description : String, 
   user : {
      type : Schema.Types.ObjectId, ref : 'User'},
   createdAt :{
      type : Date,
      default : Date.now
   }

});


 
 module.exports = mongoose.model('Post', PostSchema);

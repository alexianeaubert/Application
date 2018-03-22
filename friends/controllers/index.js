function friend(req, res) {
   let process = require('../utilities/index.js');
   process.findUsers(req,res);
}

function friendProcess(req, res){
   let process = require('../utilities/index.js');
   process.addFriend(req,res);
}

function unFriendProcess(req, res){
   let process = require('../utilities/index.js');
   process.removeFriend(req,res);
}

module.exports.friend = friend;
module.exports.friendProcess = friendProcess;
module.exports.unFriendProcess = unFriendProcess;

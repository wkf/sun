var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserModel = new Schema({
  username: {type: String, trim: true},
  password: {type: String},
  salt: {type: String},
  token: {type: String},
  email: {type: String},
  sessionId: {type: String}
});

var GameModel = new Schema({
  // need a game id or token
  users: [UserModel],
  level: {type: Number, default: 0},
  score: {type: Number, default: 0},
  uuid: {type: String, required: true},
  token: {type: String, required: true}
});

var connect = function(db, cb) {
  var User;
  mongoose.connect(db || "mongodb://localhost/node_knockout_2012");
  User = mongoose.model('user', UserModel);
  Game = mongoose.model('game', GameModel);
  return cb({
    User: User,
    Game: Game
  });
};

module.exports = {
  connect: connect
};

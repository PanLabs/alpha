var Mongoose = require('mongoose');
var Config = require('./config');

//load database
//Mongoose.connect('mongodb://' + Config.mongo.username + ':' + Config.mongo.password + '@' + Config.mongo.url + '/' + Config.mongo.database);
Mongoose.connect('mongodb://localhost:27017/test');
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;

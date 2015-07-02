var Config = require('../config');
var Joi = require('joi');
var User = require('../models/user').User;


// /**
//  * Handles a call to /api/users/{userId} and updates the user
//  */
// exports.updateUser = {
// 	auth: 'session',
// 	handler: function (request, reply) {
// 		console.log(request.payload);
// 		User.findByIdAndUpdate(request.params.userId, request.payload, function (err, user) {
// 			if (err) return reply(err);
// 			console.log(request.params.userId);
// 			return reply({user:user});
// 		});
//   	}
// };
//
//
// /**
//  * Handles a call to /api/channels/{channel_ids?} and returns the user's channels - or if no id's are passed, returns all channels
//  */
// exports.getChannels = {
// 	auth: 'session',
// 	handler: function (request, reply) {
// 		var userId = encodeURIComponent(request.params.userId);
// 		console.log(request.query.ids);
//
// 		if (request.query.ids) {
//
// 			Channel.find({'_id': { $in: request.query.ids}}, function (err, channels) {
// 				if (err) {
// 					reply(err);
// 					return;
// 				}
//
// 				reply({channels:channels});
// 			});
// 		} else if (request.params.channel_ids) {
// 			Channel.findOne({'_id': request.params.channel_ids}, function (err, channels) {
// 				if (err) {
// 					return reply(err);
// 				}
// 				reply({channels:channels});
// 			});
// 		} else {
// 			Channel.find(function (err, channels) {
// 				if (err) {
// 					reply(err);
// 					return;
// 				}
// 				reply({channels:channels});
// 			});
// 		}
//   	}
// };


/**
 * Handles a call to /api/images and saves the images
 */
exports.saveImages = {
	payload: {
        maxBytes: 209715200,
        output: 'stream',
        parse: true
    },
	handler: function (request, reply) {
          request.payload.htmlInputName.pipe(fs.createWriteStream("test"));
      }
};

/**
 * Handles a call to /api/images and returns the images
 */
exports.getImages = {
	handler: function (request, reply) {

		return reply({"imageName": "someName"});
  	}
};

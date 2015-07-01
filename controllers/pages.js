var Config = require('../config');

/**
 * Handles a call to / and shows some text with links to login and registration
 */
exports.index = {
	auth: {
		mode: 'try',
		strategy: 'session'
	},
	handler: function (request, reply) {
		reply.view('home');
	}
};

// var Static = require('./controllers/static');
var Pages = require('./controllers/pages');
// var Authentication = require('./controllers/authentication');
var Api = require('./controllers/api');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions - separated by pages/authentication/api
 */
exports.endpoints = [
	{ method: 'GET',    path: '/',				          									config: Pages.index   	    		},
	{ method: 'POST',    path: '/images',				          							config: Api.saveImages   	    	},
	{ method: 'GET',    path: '/images',				          							config: Api.getImages   	    	},
];

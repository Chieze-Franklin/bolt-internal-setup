'use strict';

var fs = require("fs");
var path = require("path");

var __steps;
var __setup;
var getSetup = function(){
	if(__setup) return __setup;

	//fs.readFile(__dirname + 'setup.json', 'utf8', function (err, data) {
	//	__setup = JSON.parse(data);
	//});

	var data = fs.readFileSync(path.join(__dirname, './../../../sys/server/setup.json')); //deliberately reading the file sync
	__setup = JSON.parse(data);
	return __setup;
}

module.exports = {
	getRedirect : function(){ 
		return getSetup().redirect;
	},
	getSteps : function(){ 
		if(__steps) return __steps;

		__steps = getSetup().steps;
		
		return __steps;
	}
};
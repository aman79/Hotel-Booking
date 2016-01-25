/**
 * New node file
 */
define(function(require){
	
	var Backbone = require('backbone');
	var hotelmodel = require('models/hotelModel');
	var localstorage = require('localStorage');
	var Hotel =   Backbone.Collection.extend({
		model : hotelmodel,
		localStorage : new localstorage('hotel-details')
	});
	return new Hotel();
	
});
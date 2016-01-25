/**
 * New node file
 */
define(function(require){
	var Backbone = require('backbone');
	var resmodel = require('models/reservationModel');
	var localstorage = require('localStorage');
	var Reservation =   Backbone.Collection.extend({
		model : resmodel,
		localStorage : new localstorage('Reservation-details')
	});
	return new Reservation();
});
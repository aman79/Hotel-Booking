/**
 * New node file
 */
define(function(require) {
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var hotMod = require('models/hotelModel');
	var hotColl = require('collections/hotelCollection');

	var resMod = require('models/reservationModel');
	var resColl = require('collections/reservationCollection');

	return Backbone.View.extend({
		events : {
			'click #bookHotel' : 'bookReservation',
			'click #closereservationform' : 'close'
		},
		close : function() {
			this.remove();
		},
		bookReservation : function() {
			var checkinDate = $("#in").val();
			var email = $("#email").val();
			var checkoutDate = $("#out").val();
			var hotelName = this.model.get('name');
			var json = {
				"checkin" : checkinDate,
				"checkout" : checkoutDate,
				"email" : email,
				"hotelName" : hotelName
			};

			var res = new resMod(json);
			resColl.create(res);
		},
		render : function() {
			var temp = require('text!templates/hotelDetailsTemplate.html');
			var Compiled = _.template(temp);
			this.$el.html(Compiled({
				hotel : this.model.toJSON()
			}));
			return this;
		}
	});
});
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

	var showHotel = require('views/showHotelView');
	var pageNumber = 1;
	var incr = 3;
	var count;

	return Backbone.View.extend({

		events : {

			'click #next' : 'next',
			'click #prev' : 'prev'
		},

		next : function() {
			pageNumber = parseInt($("#pageno").html());
			if (count < incr) {
				pageNumber = pageNumber;
			} else {
				pageNumber++;
			}
			this.loadHotels();
			$("#pageno").html(pageNumber);
		},
		prev : function() {
			pageNumber = parseInt($("#pageno").html());
			if (pageNumber <= 1) {
				pageNumber = 1;
			} else {
				pageNumber--;
			}
			this.loadHotels();
			$("#pageno").html(pageNumber);
		},
		loadHotels : function() {
			if (hotColl.length) {
				var newCollection = hotColl.slice((pageNumber - 1) * incr,
						(pageNumber) * incr);
				count = 0;
				newCollection.forEach(function(itr) {
					var hotelname = new showHotel({
						model : itr
					});
					$('#hotelnames').append(hotelname.render().el);
					count++;
				}, this);
			}
		},
		render : function() {
			hotColl.fetch({
				reset : true
			});
			var temp = require('text!templates/page.html');
			var Compile = _.template(temp);
			this.$el.html(Compile());
			this.loadHotels();
			return this;
		}

	});
});
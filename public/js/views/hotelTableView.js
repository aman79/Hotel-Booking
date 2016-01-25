/**
 * New node file
 */
define(function(require) {

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var hotMod = require('models/hotelModel');
	var hotColl = require('collections/hotelCollection');

	var hotelJson = require('json/hotels');
	var hotel = hotelJson.hotels;
	
	var showHotel = require('views/showHotelView');

	return Backbone.View.extend({
		
		events : {
			'click #closeShow' : 'close'
		},
		close : function(){
			this.remove();
		},

		render : function() {
			var temp = require('text!templates/hotelTableTemplate.html');
            var Compile = _.template(temp);
            this.$el.html(Compile());
            this.show();
            return this;
           
            
		},
		show : function(){
			var hoteldetails=this.$el.find("#hotelnames").html('');
			hotColl.forEach(function(itr){
				var show = new showHotel({
					model : itr
				});
				hoteldetails.append(show.render().el);
			});
		}
	});
});
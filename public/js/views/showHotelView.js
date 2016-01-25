/**
 * New node file
 */
define(function(require){
	
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	
	var hotMod  = require('models/hotelModel');
	var hotColl = require('collections/hotelCollection');
	
	var hotelDetails = require('views/hotelDetailsView');
	
	return Backbone.View.extend({
		
		
		tagName : 'tr',
		
		events : {
			'click .viewhotel' : 'View'
		},
		
		View : function(){
			var hotDetails = new hotelDetails({
				model : this.model
			});
			$('#hotelDetails').html(hotDetails.render().el);
		},
		render : function(){
			var temp = require('text!templates/showHotelTemplate.html');
			var Compile = _.template(temp);
			this.$el.html(Compile({
				hotel : this.model.toJSON()
			}));
			return this;
		}
	});
});
/**
 * New node file
 */
define(function(require){
	
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	
	var hotMod  = require('models/hotelModel');
	var hotColl = require('collections/hotelCollection');
	
	
	var resMod = require('models/reservationModel');
	var resColl = require('collections/reservationCollection');
	
	var reserve = require('views/reservedView');
	
	return Backbone.View.extend({
		
		events : {
			'click #closereserve' : 'close'
		},
		
		close : function(){
			this.remove();
		},
		render :function(){
			var temp = require('text!templates/reservationTemplate.html');
			var Compiled = _.template(temp);
			this.$el.html(Compiled());
			this.showReservation();
			return this;
		},
		showReservation : function(){
			var reservedetails=this.$el.find("#reserved").html('');
			resColl.forEach(function(itr){
				var show = new reserve({
					model : itr
				});
				reservedetails.append(show.render().el);
			});
		}
	});
});
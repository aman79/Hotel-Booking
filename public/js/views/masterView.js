define(function(require){
	
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');
	
	var hotMod  = require('models/hotelModel');
	var hotColl = require('collections/hotelCollection');
	
	var hotelJson = require('json/hotels');
	var hotel = hotelJson.hotels;
	
	var resMod = require('models/reservationModel');
	var resColl = require('collections/reservationCollection');
	
	var hotelTable = require('views/hotelTableView');
	
	var reservationView = require('views/reservationView');
	
	var pageView = require('views/pageView');
	
	//var showHotel = require('views/showHotelView');
	
	
	return Backbone.View.extend({
		
		
		el : "#cont",
		
		events : {
			
			'click #reservation' : 'Reservation'
		},
		Reservation : function(){
			var reserve = new reservationView();
			$('#reserve').html(reserve.render().el);
			
		},
		
		render : function(){
			var temp = require('text!templates/navBarTemplate.html');
			var Compile = _.template(temp);
			$('#mainTemp').html(Compile());
			this.onload();
			this.showHotel();
			this.showPage();
			return this;
		},
		showPage  : function(){
			
			var page = new pageView();
			$('#page').html(page.render().el);
		},
		
		showHotel : function(){
			var show = new hotelTable();
			$('#hoteltable').html(show.render().el);

			/*hotColl.forEach(function(itr){
				var show = new showHotel({
					model : itr
				});
				$('#hotelnames').append(show.render().el);
			});
			*/
		},
		
		onload : function(){
			hotColl.fetch({
				reset : true
			});
			
			resColl.fetch({
				reset : true
			});
			if (hotColl.length === 0) {
				_.each(hotel, function(e) {
					var hot = new hotMod(e);
					hotColl.create(hot);
				});
			}
			
		}
		
		
	});
	

});
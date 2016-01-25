/**
 * New node file
 */
define(function(require) {
	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	return Backbone.View.extend({
		tagName : 'tr',

		render : function() {
			var temp = require('text!templates/reservedTemplate.html');

			var Compiled = _.template(temp);
			this.$el.html(Compiled({
				reservation : this.model.toJSON()
			}));
			return this;
		}
	});
});
define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Teacher model");
		},

		defaults: {
            name:'',
            age:999
        },

    });
});

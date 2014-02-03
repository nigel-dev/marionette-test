define([
	'backbone',
	'models/teacher'
],
function( Backbone, Teacher ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Teachers collection");
		},
        
        tagName: "ul",
		model: Teacher
		
	});
});

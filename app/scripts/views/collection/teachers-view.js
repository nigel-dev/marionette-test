define([
	'backbone',
	'views/item/teacher-view'
],
function( Backbone, TeacherView  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a TeachersView CollectionView");
		},
		
    	itemView: TeacherView,
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

define([
	'backbone',
	'hbs!tmpl/item/teacher-view_tmpl'
],
function( Backbone, TeacherViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a TeacherView ItemView");
		},
		
    	template: TeacherViewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

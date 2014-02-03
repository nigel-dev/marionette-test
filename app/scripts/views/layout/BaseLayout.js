define([
	'backbone',
	'hbs!tmpl/layout/BaseLayout_tmpl',
    'views/collection/teachers-view'
],
function( Backbone, BaselayoutTmpl, Teachers  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Baselayout Layout");
		},
		
    	template: BaselayoutTmpl,
    	

    	/* Layout sub regions */
    	regions: {
            collections: "#collections"
        },

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {},
        
        onShow: function () {
            this.collections.show(new Teachers());
        }
	});

});

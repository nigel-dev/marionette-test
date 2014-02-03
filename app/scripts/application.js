define([
	'backbone',
	'communicator',
    'views/layout/BaseLayout'
],

function( Backbone, Communicator, BaseLayout ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        mainRegion: '#main-region'
    });

	/* Add initializers here */
	App.addInitializer( function () {
		this.mainRegion.show(new BaseLayout());
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});

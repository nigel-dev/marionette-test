(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/teachers'
		],
		function( Teachers ) {

			describe('Teachers Collection', function () {

				it('should be an instance of Teachers Collection', function () {
					var teachers = new Teachers();
					expect( teachers ).to.be.an.instanceof( Teachers );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
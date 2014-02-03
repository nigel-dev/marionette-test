(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/BaseLayout'
		],
		function( Baselayout ) {

			describe('Baselayout Layout', function () {

				it('should be an instance of Baselayout Layout', function () {
					var BaseLayout = new Baselayout();
					expect( BaseLayout ).to.be.an.instanceof( Baselayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
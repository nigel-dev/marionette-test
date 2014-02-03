(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/teachers-view'
		],
		function( TeachersView ) {

			describe('TeachersView Collectionview', function () {

				it('should be an instance of TeachersView Collectionview', function () {
					var teachers-view = new TeachersView();
					expect( teachers-view ).to.be.an.instanceof( TeachersView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
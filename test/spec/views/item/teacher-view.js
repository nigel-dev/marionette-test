(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/teacher-view'
		],
		function( TeacherView ) {

			describe('TeacherView Itemview', function () {

				it('should be an instance of TeacherView Itemview', function () {
					var teacher-view = new TeacherView();
					expect( teacher-view ).to.be.an.instanceof( TeacherView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
(function() {
	'use strict';

	var root = this;

	root.define([
		'models/teacher'
		],
		function( Teacher ) {

			describe('Teacher Model', function () {

				it('should be an instance of Teacher Model', function () {
					var teacher = new Teacher();
					expect( teacher ).to.be.an.instanceof( Teacher );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );
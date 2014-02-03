(function() {
	'use strict';

	var root = this;

	root.define( function() {

		describe('Example Test', function () {
			it('should have true equal true', function () {
				expect( true ).to.equal( true );
			});
            
            it('should have 1 equal 1', function () {
				expect( 1 ).to.equal( 1 );
			});
		});
        describe('Another Test', function () {
			it('should not be true', function () {
				expect( false ).to.not.equal( true );
			});
		});
	});

}).call( this );

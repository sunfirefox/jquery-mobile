/*
 * mobile slider unit tests
 */

(function($){
	module('jquery.mobile.slider.js');

	var keypressTest = function(opts){
		var slider = $(opts.selector),
		    val = window.parseFloat(slider.val()),
				handle = slider.siblings('.ui-slider').find('.ui-slider-handle');

		expect( opts.keyCodes.length );

		$.each(opts.keyCodes, function(i, elem){
			$.Event.prototype.keyCode = $.mobile.keyCode[elem];
			handle.trigger('keydown');
			val = val + opts.increment;
			same(val, window.parseFloat(slider.val(), 10), "new value is one larger");
		});
	};

	test( "slider should move right with up, right, and page up keypress", function(){
		keypressTest({
			selector: '#range-slider-up',
			keyCodes: ['UP', 'RIGHT', 'PAGE_UP'],
			increment: 1
		});
	});

	test( "slider should move right with down, left, and page down keypress", function(){
		keypressTest({
			selector: '#range-slider-down',
			keyCodes: ['DOWN', 'LEFT', 'PAGE_DOWN'],
			increment: -1
		});
	});
})(jQuery);
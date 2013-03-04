(function( $ ) {	// pass jQuery to IIFE so dollar sign can be overwritten (noconflict)
	$.fn.useless = function() {

		var elnum = 0;	// which element index am i modifying

		// use when to fade out, then do something to the element, then fade it back in
		var doSomethingUseless = function(something, element) {
			$.when( $(element).fadeOut() ).then(
				function() {
					something(element);
					elnum++;
					$(element).fadeIn();
				}
			);
		};

		var getRandomColor = function() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.round(Math.random() * 15)];
		    }
		    return color;
		}

		$("body").prepend('<span style="font-weight: bold; color: ' + getRandomColor() + '; font-size: 24pt;">WHY WOULD YOU DO THIS?</span>')

		// do something dumb with each object
		return this.each(function() {
			// what should I do?
			console.log(elnum);
			var decider = Math.random();
			if (decider < .333) {		// move to random place
				 doSomethingUseless(
					function(element) {
						$(element).css('position', 'fixed');
						var top = Math.random() * 800;
						var left = Math.random() * 1000;
						$(element).prop('top', top);
						$(element).prop('left', left);
					},
					this
				);
			} else if(decider < .666) {	// rotate to a random angle
				 doSomethingUseless(
				 	function(element) {
				 		var angle = Math.floor(Math.random() * 360);
				 		$(element).addClass('why_am_i_crooked' + elnum);
				 		$('head').append('<style type="text/css"> .why_am_i_crooked' + elnum + ' { transform: rotate(' + angle + 'deg) } </style>');
				 	}, this
				 );
			} else {	// apply random colors
				 doSomethingUseless(
					function(element) {
						$(element).css('background', getRandomColor());
						$(element).css('color', getRandomColor());
					},
					this
				);
			}
		});
	}
}) ( jQuery );
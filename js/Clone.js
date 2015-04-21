$(document).ready(function(){
	$("body").click(function () {
		$("#myimage").clone().insertAfter("#myimage:last");
		$('.bunny').effect('bounce', 500);
	});
	$('.bunny').on("mouseenter", function() {
    	$("#myimage").clone().insertAfter("#myimage:last");
    	$('.bunny').effect('bounce', 500);
    });
	
	function randomFromTo(from, to){
			return Math.floor(Math.random() * (to - from + 1) + from);
		}
  
	function moveRandom(obj) {
			/* get container position and size
			 * -- access method : cPos.top and cPos.left */
			var cPos = $('#container').offset();
			var cHeight = $('#container').height();
			var cWidth = $('#container').width();
			
			// get box padding (assume all padding have same value)
			var pad = parseInt($('#container').css('padding-top').replace('px', ''));
			
			// get movable box size
			var bHeight = obj.height();
			var bWidth = obj.width();
			
			// set maximum position
			maxY = cPos.top + cHeight - bHeight - pad;
			maxX = cPos.left + cWidth - bWidth - pad;
			
			// set minimum position
			minY = cPos.top + pad;
			minX = cPos.left + pad;
			
			// set new position			
			newY = randomFromTo(minY, maxY);
			newX = randomFromTo(minX, maxX);
			
			obj.animate({
				top: newY,
				left: newX
				}, 5000, function() {
          			moveRandom(obj);
          			$('.bunny').effect('bounce', 500);
			});
		}
	$('.bunny').each(function() {
		moveRandom($('.bunny'));
	});

});
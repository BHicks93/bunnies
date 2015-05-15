var number_bunnies = 0;
var max_bunnies = 300;

$(document).ready(function(){
	//all jQuery code goes here
	console.log("Hi there buddy2");
	
    bunnyBread($('.bunny'));

   // $(document).click(function(){
   //     max_bunnies = max_bunnies * max_bunnies;
   // });

    function bunnyBread(obj){
            obj.mouseover(function() {
                console.log(number_bunnies);
                if (number_bunnies < max_bunnies){
                    var img = $('<img class="bunny">'); //Equivalent: $(document.createElement('img'))
                    img.attr('src', "img/rabbit.png");
                    img.appendTo('#container');
                    img.css({
                        top: $(this).css('top'),
                        left: $(this).css('left')
                    });
                    img.on('load',function() {
                        moveRandom(img);
                    });
                    number_bunnies = number_bunnies + 1;      
                    bunnyBread(img);
                }
            });
        
    }
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
				}, Math.random()*8000+500, function() {
          			moveRandom(obj);
			});
		}
	$('.bunny').each(function() {
		moveRandom($(this));
	});
});
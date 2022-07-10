$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});
		function loopOne() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
				loopOne();
			});
		}
		function loopTwo() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
				loopTwo();
			});
		}
		function loopThree() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
				loopThree();
			});
		}
		function loopFour() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
				loopFour();
			});
		}
		function loopFive() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
				loopFive();
			});
		}
	
		function loopSix() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
				loopSix();
			});
		}
		function loopSeven() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
				loopSeven();
			});
		}
	$('#turn_on').click(function(){
		var audio = $('#song')[0];
        	audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		$("#auto-logo").fadeOut('slow').delay(1000);
		$(this).fadeOut('fast').delay(1000).promise().done(function(){
			$('#call_autobots').fadeIn('slow');
		});
	});
	

	$('#call_autobots').click(function(){
		$('<img id="fly" src="bee-right-there-omw.gif" width="130" height="150" style="position:fixed; right:0px; bottom:0px;">').appendTo(".container");
		$('<img id="fly" src="bumblebee-transformers.gif" width="100" height="130" style="position:fixed; left:0px; top:100px;">').appendTo(".container");
		$('<img id="fly" src="prime.png" width="100" height="100" style="position:fixed; right:0px; top:80px;">').appendTo(".container");
		$('.info').fadeIn('slow');
		
		$(this).fadeOut();
	});



		
	
	

});




//alert('hello');

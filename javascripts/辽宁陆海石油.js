$(function(){
	(function(){
			var _new=0;
			var _old=0;
			$('.slide_nav a').click(function(){		
				$(this).css({background: 'url(images/slide_p1.png) no-repeat'}).siblings().css({background: 'url(images/slide_p2.png) no-repeat'});
				var _new=$(this).index();
				if (_new>_old) {
					$('#youshi li:eq('+_new+')').css({left:'100%'});
					$('#youshi li:eq('+_old+')').animate({left:'-100%',opacity:0},500);
					$('#youshi li:eq('+_new+')').animate({left:0,opacity:1},400);
					$('#youshi li:eq('+_new+') .right').css({right:'-100%',opacity:0}).animate({right:0,opacity:1},800);
					$('#youshi li:eq('+_new+') .middle').css({left:'200%',opacity:0}).animate({left:'463px',opacity:1},1000);
				}

				if (_new<_old) {
					$('#youshi li:eq('+_new+')').css({left:'-100%'});
					$('#youshi li:eq('+_old+')').animate({left:'100%',opacity:0},500);
					$('#youshi li:eq('+_new+')').animate({left:0,opacity:1},400);
					$('#youshi li:eq('+_new+') .right').css({right:'-100%',opacity:0}).animate({right:0,opacity:1},800);
					$('#youshi li:eq('+_new+') .middle').css({left:'200%',opacity:0}).animate({left:'463px',opacity:1},1000);
				}
				_old=_new;

			})	
			setInterval(function(){
				$('.slide_nav a:eq('+_new+')').trigger('click');
				_new++;
				if (_new==3) {_new=0}
			},3000)
		})();

		(function(){
			var a;
			$('.duo a').hover(function(){			 
				$(this).css({opacity:1});
			},function(){
					if (i!=$(this).index()) {				
						$(this).css({opacity:0});
					}				
			})		
			var i=0;
			setInterval(function(){	
				i++;	
				if (i==4) {i=0}	;
				$('.duo a').eq(i).css({opacity:1,'z-index':20}).siblings().css({opacity:0});	
			}, 5000);
		})();

		(function(){
			$('#menu').click(function(){
				$('.navhide').toggleClass('active')
			})
		})()
})


		

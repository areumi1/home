$(function(){
	
	$('p#intro').animate({
		padding : '20px',   // 안쪽 여백
		fontSize : '30px' 	
	}, 2000);
	
	$('#navigation ul li').hover(function(){
		$(this).animate({paddingLeft : '+=15px'}, 200);
	},function(){
		$(this).animate({paddingLeft : '-=15px'}, 200);
	});
	
	// 고정퀵메뉴 원리
	// 어느 지점으로 스크롤을 내려도 윈도우 화면에 위치 고정
	$(window).scroll(function(){
		$('#navigation').css('top',$(document).scrollTop())
	});
	
})

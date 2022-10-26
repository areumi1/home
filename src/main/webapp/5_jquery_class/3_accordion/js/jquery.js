$(function(){
	$('.accordion').each(function(){
		
		let allDt = $(this).find('dt');
		let allDd = $(this).find('dd');
		
		allDd.hide();  // 안보이게
		allDd.first().show();  // 첫번째 화면 보이게
		
		allDt.css({'cursor': 'pointer' });
		
		allDt.click(function(){
			allDd.hide();
			//$(this).next().show(); 	// 선택한 탭 다음부분을 화면에 출력
			//$(this).next().fadeIn();		
			$(this).next().slideDown();  	
			//$(this).next().toggle();
			
		});
		
	});
	
	
	
});
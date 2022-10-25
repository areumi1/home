$(function(){
	$('#hideButton').click(function(){
		$('#intro img').hide();
	});
	
	$('#showButton').click(function(){
		$('#intro img').show();
	});
	
//	$('#toggleButton').click(function(){
//		$('#intro img').toggle();
//	});
	
	// toggle() 함수는 버전에 따라 사용불가능할수 있으며
	// 복잡해질 경우 사용이 안될수있으므로 하위 코딩으로 연습해야한다. 

	$('#toggleButton').click(function(){
		if ($('#intro img').is(':visible')) // is : 이다 아니다를 출력해주는 함수
		{
			$('#intro img').fadeOut(1000);
		}else{
			$('#intro img').fadeIn(1000);
		}
	
	});
	
	// 테이블 내용 중 홀수행을 배경색 지정 0번부터 시작하므로 odd가 아닌 even을 사용해야한다.
	//$('#celebs table.data > tbody > tr:even').css({'background':'lightblue'});
	$('#celebs table.data > tbody > tr:odd').addClass('table_striping');
	
	// 마우스가 올라갔을때 배경색 바뀌고 다시 마우스 나오면 원상복귀

	$('#celebs tr').hover(function(){ // mouseover,mouseout 한꺼번에 선언 : hover
			$(this).addClass('td_mouseover');
		},function(){
			$(this).removeClass('td_mouseover')
		});
	
	
});
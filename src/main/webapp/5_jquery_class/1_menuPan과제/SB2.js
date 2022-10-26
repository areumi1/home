$(function() {
	// 탭화면
	$(".tab_content").hide(); // 원하는 화면 외 다른 컨텐츠 숨기기
	$("ul.tabs li:first").addClass("active").show(); // 첫번째 탭 활성화
	$(".tab_content:first").show(); // 첫번째 탭안의 내용들을 보여준다.


	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); // 이전 탭 활성화 클레스 제거
		$(this).addClass("active"); // 선택한 탭의 활성화 부여
		$(".tab_content").hide(); // 선택한 탭 외의 다른 컨텐츠 숨기기

		var activeTab = $(this).find("a").attr("href"); // 선택한 a테그 의 하이퍼링크 착기
		$(activeTab).fadeIn(); // 탭에 포커스 맞추기 ()
		return false;
	});
	
	// 윈도우 화면고정
	$(window).scroll(function() {
		$('#rightdiv').css('top', $(document).scrollTop())
	});

	// 주문내역 저장및 출력
	var sum = 0;
	$('.menuCount').change(function() {
	
		
		let menu = $(this).parent().find('span:eq(0)').attr('value');
		let price = $(this).parent().find('span:eq(1)').attr('value');
		let count = $(this).val();
		
		
		if(count==0){
			alert('1개 이상 선택해 주세요');
		}else{
		sum += count * price;
		$('#total').attr('value', sum);

		let tr = $('<tr/ class="jumun">');	// tr 저장변수
		
		// 중복일때 
		let flag = false;
		let list = $('#listTable tr.jumun');
		for(let i=0; i<list.length; i++){
			if(menu==$(list[i]).find('td:eq(0)').text()){
				let Count = Number($(list[i]).find('td:eq(1)').text());
				Count += Number(count);
				$(list[i]).find('td:eq(1)').text(Count);
				
				let Price = Number($(list[i]).find('td:eq(2)').text());
				Price += Number(price) * Number(count);
				$(list[i]).find('td:eq(2)').text(Price);
				flag = true;
			}
		}
		
		if(!flag){
		tr.append($('<td/>').text(menu));
		tr.append($('<td/>').text(count));
		tr.append($('<td/>').text(price));
		tr.append($('<td><button class="bttn">삭제</button></td>'));

		$('#listTable').append(tr);
		}
		}
	});

	$('#listTable ').on('click', '.bttn', function() {

		let price = $(this).parent().parent().find('td:eq(2)').text();
		let count = $(this).parent().parent().find('td:eq(1)').text();
		sum -= price * count;
		$('#total').attr('value', sum)
		$(this).closest("tr").remove();

	});


	$('#btn').click(function() {
		let price = $(this).parent().parent().find('td:eq(2)').text();
		let count = $(this).parent().parent().find('td:eq(1)').text();
		sum += count * price;
		let result = confirm(sum + "원입니다. 주문 하시겠습니까?");
		if (!result) {
			$('.jumun').remove();
			$('#total').attr('value', 0);
			sum = 0;
			return false;
		} else {
			$('.jumun').remove();
			$('#total').attr('value', 0);
			$(".menuCount").val('0');
			sum = 0;
			winObj = window.open("jumun.html", "", 'width=310, height=150');
		}	
	});
	
	
	
	$('#card').click(function(){
			window.close();
			
		});


})
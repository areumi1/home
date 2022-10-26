$(function(){
	let topDiv = $('.tabSet');
	let anchors = topDiv.find('ul.tabs > li >a');
	let panelDivs = topDiv.find('div.panels > div.panel');
	
	anchors.show();
	panelDivs.hide();
	
	let lastAnchor = anchors.filter('.on');		 // 자기 자신의 레벨에서 on이 있는 테그 검색
	let lastPanel = $(lastAnchor.attr('href'));   // on이 있는 링크 변수에 담기
	//alert(lastPanel);
	lastPanel.show();		// 출력
	
	anchors.click(function(){
		let currentAnchor = $(this); // 클릭한 링크
		let currentPanel =  $(currentAnchor.attr('href'));  // 클릭한 링크 부여
		
		lastPanel.hide();		// 첫번째 패널 숨기기
		currentPanel.show();	// 클릭한 링크 화면 띄우기
		
		lastAnchor.removeClass('on');  // on 삭제
		currentAnchor.addClass('on');  // 클릭한 테그에 on 입력
		
		// 화면에 클릭한 패널만 화면에 띄우기 위해서 값을 넣어줌
		lastAnchor = currentAnchor;  // 클릭한 테그에 on을 넣어주고 그 테그를 변수에 담아 값을 바꿔줌 
		lastPanel = currentPanel;	// on이 있는 링크를 변수에담워 변수의 원래 값을 변경
	})
	
});
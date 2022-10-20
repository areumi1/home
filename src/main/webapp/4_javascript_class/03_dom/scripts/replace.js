
// window.onload = function(){	
		
  let list = document.getElementById('list'); 
  let pic = document.getElementById('pic');
  let del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
  //<ul id="list">
  list.onclick = function(evt){
	let isbn = evt.target.getAttribute('data-isbn')
	//alert(isbn);
	if(isbn){
		// <img src ='경로' height='150' width='100'>
		let img = document.createElement('img');
		img.src = 'images/' + isbn + '.jpg';
		img.height = 150;
		img.width = 100;
		
		if(pic.getElementsByTagName('img').length == 0){  // 길이가 0일때(없을때)
			pic.appendChild(img);
			del.disabled = false; 		 // 첫 이미지가 생성되면서 삭제버튼 활성화시킴.
			
			
		}else{
			pic.replaceChild(img,pic.lastChild);    // 이미지가 있을 경우 pic안의 마지막 자식으로 바꾸다.
		}
		
	}
}

  
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
			document.getElementById('del');	
			del.onclick = function(){   // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다
			pic.removeChild(pic.lastChild);
			return;
			}
  
  
  
//};

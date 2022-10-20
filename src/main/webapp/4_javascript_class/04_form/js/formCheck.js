window.onload = function(){

		let frm = document.getElementById('frm');
		//var inputs = document.querySelectorAll("input");
		
		frm.onsubmit = function(evt){
			evt.stopPropagation();
			evt.preventDefault();
			
			//alert(frm.agree.checked);
			if(!frm.agree.checked){
				alert('동의해주셔야 가능 합니다.')
				return;
			}
			
			frm.submit();
		}

}
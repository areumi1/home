$(function(){
	$(".header ul.menu > li > a > img" ).hover(function(){
		var src = $(this).attr('src');
			$(this).attr('src',src.replace('_off','_on'));
		
	},function(){
		var src = $(this).attr('src');
			$(this).attr('src',src.replace('_on','_off'));

	});
	
	});
	
	
	
	

$(function() {

	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content


	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

	$(window).scroll(function() {
		$('#rightdiv').css('top', $(document).scrollTop())
	});

	let sum = 0;
	$('.menuCount').change(function() {

		let menu = $(this).parent().find('span:eq(0)').attr('value');
		let price = $(this).parent().find('span:eq(1)').attr('value');
		let count = $(this).val();
		sum += count * price;
		$('#total').attr('value', sum);

		let tr = $('<tr/ class="jumun">');

		tr.append($('<td/>').text(menu));
		tr.append($('<td/>').text(count));
		tr.append($('<td/>').text(price));
		tr.append($('<td><button class="bttn">삭제</button></td>'));

		$('#listTable').append(tr);

	});

	$('#listTable').on('click', '.bttn', function() {
		let price = $(this).parent().parent().find('td:eq(2)').text();
		let count = $(this).parent().parent().find('td:eq(1)').text();
		sum -= price * count;
		$('#total').attr('value', sum)
		$(this).closest("tr").remove();

	});

	$('#btn').click(function() {
		let result = confirm("주문 하시겠습니까?");
		if (!result) {
			$('.jumun').remove();
			$('#total').attr('value', 0);
			$(".menuCount > option:eq(0)").prop("selected", true);
			return false;
		} else {
			$('.jumun').remove();
			$('#total').attr('value', 0);

		}
	});


})
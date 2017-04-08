// $(document).ready(function(){


// })

$(function () {

	var $p1 = $('.p-1');
	var $p3 = $('.p-3');

	var $wrap = $('#wrap');


	console.log($p1);
	console.log($wrap);

	var $p2 = $wrap.find('.p-2');
	var $p = $wrap.find('p');

	console.log($p2, $p);

	var $parent = $wrap.parent();

	console.log($parent);




	$p.addClass('active');
	$wrap.addClass('active');

	var p4 = $('.p-4');
	p4.removeClass('active');



	$p2.css('font-weight', '700');


	$p3.css({
		color: 'red',
		background: "green",
		fontWeight: '700',
		paddingBottom: '45px'

	});


	var $link = $wrap.find('a');

	$link.attr('href','http://google.com');
	$link.attr('target','_blank');



	var $link3 = $('a')[2]; //возврат элемента, не jquery коллекция

	console.log($link3);

	// $link3.attr('href','#');//метод jquery для jquery коллекций. Не сработает



	// chaining - цепочки вызовов

	$wrap
		.css({
			margin: '0 auto',
			maxWidth: '700px'
		})

		.attr('data-toggle', 'toggle')

		.addClass('active');



	$p3.remove();


	$('body').append('<div class="wrap-2">wrap2</div>');
	$('body').append($link);


	



});


	
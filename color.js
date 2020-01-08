function onClickNewColor()
{
	$('.carre').toggle('hide');
}

function onClickBorderCercle()
{
	$('.cercle').removeClass('boord');
	$(this).addClass('boord');
}

function onClickAddColor() {

	let color = $('#box').css('backgroundColor');


	$('<div></div>').addClass('cercle').css('backgroundColor', color).appendTo('#cercle')
}
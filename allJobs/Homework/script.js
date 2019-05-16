$(document).ready(function() {

	$('li:eq(7)').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			},2000
		);
		$('.modal').slideDown(2000)
	});


	$('.main_btna').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 2000
		);

		$('.modal').slideDown(2000)
	});


	$('.main_btn').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 2000
		);

		$('.modal').slideDown(2000)

	});




	$('.closeX').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'hide'
			}, 2000
		);

		$('.modal').slideUp(2000)
	});
}); 

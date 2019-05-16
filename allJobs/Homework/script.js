$(document).ready(function() {

	$('li:eq(7)').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 3000
		);
		$('.modal').animate(
			{
				opacity: 'show',
				height: 'show'
			}, 3000
		);
	});


	$('.main_btna').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 3000
		);

		$('.modal').animate(
			{
				opacity: 'show',
				height: 'show'
			}, 3000
		);
	});


	$('.main_btn').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 3000
		);

		$('.modal').animate(
			{
				opacity: 'show',
				height: 'show'
			}, 3000
		);

	});




	$('.closeX').on('click', function(){
		$('.overlay').animate(
			{
				opacity: 'hide'
			}, 3000
		);

		$('.modal').animate(
			{
				opacity: 'hide',
				height: 'hide'
			}, 3000
		);
	});
}); 

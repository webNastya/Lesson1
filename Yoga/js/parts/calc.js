function calc() {
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function(){
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;

		if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		}
	});

	restDays.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;

		if (persons.value == '' || restDays.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		}
	});


	place.addEventListener('change', function(){
		if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});


	let counterInput = document.querySelectorAll('.counter-block-input');
	for (let i = 0; i < counterInput.length; i++) {
		counterInput[i].addEventListener('keypress', function(e){
			if (!/\d/.test(e.key)) { 
				e.preventDefault();
			} 
		});
	}
}
module.exports = calc;
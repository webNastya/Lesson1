window.addEventListener('DOMContentLoaded', function () {
	
	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//Timer

	let deadLine = '2019-05-05';

	function getTimeRemeining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));

		return {
			'total' : t, //кол-во милисекунд
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemeining(endtime);
				hours.textContent = ('0' + t.hours).slice(-2);
				minutes.textContent = ('0' + t.minutes).slice(-2);
				seconds.textContent = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadLine);

	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		close = document.querySelector('.popup-close');

	function modalMore() {
		more.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});

		for (let i = 0; i < descriptionBtn.length; i++) {
			descriptionBtn[i].addEventListener('click', function() {
				overlay.style.display = 'block';
				this.classList.add('more-splash');
				document.body.style.overflow = 'hidden';
			});
		}
	}
	function closeModal() {
		close.addEventListener('click', function(){
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	};
	modalMore();
	closeModal();

	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так'
	};

	let form = document.querySelector('.main-form'),
		formContact = document.querySelector('#form'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	function sendForm(elem) {
		elem.addEventListener('submit', function(e) {
			e.preventDefault();
			elem.appendChild(statusMessage);
			let formData = new FormData(elem);

			function postData(data){
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					request.onreadystatechange = function(){
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4 && request.status == 200) {
							if (request.status === 200 && request.status < 300) {
								resolve();
							} else {
								reject();
							}
						}
					}
					let obj = {}
					formData.forEach(function(value, key){
						obj[key] = value;
					});
					let json = JSON.stringify(obj);
					
					request.send(json);
				});
			}

			function clearInput(){
				let inputsAll = document.querySelectorAll('input');
				for (let i = 0; i < inputsAll.length; i++) {
					inputsAll[i]. value = '';
				}
			}

			postData(formData)
				.then(()=> statusMessage.innerHTML = message.loading)
				.then(()=> statusMessage.innerHTML = message.success)
				.catch(()=> statusMessage.innerHTML = message.failure)
				.then(clearInput);	
		});
	}

	sendForm(form);
	sendForm(formContact);

	let phone = document.getElementsByName('phone');
	for (let i = 0; i < phone.length; i++) {
		phone[i].addEventListener('keypress', function (e) {
	        if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
	            e.preventDefault();
	        }
    	});
	}

	let tel = document.getElementsByName('tel');
	tel[0].addEventListener('keypress', function(e){
		if (!/\d/.test(e.key) && !/\+/.test(e.key) && /\0/.test(e.key)) { 
			e.preventDefault();
		}
	});

	//Slider

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

		showSlides(slideIndex);

		function showSlides(n){

			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}

			slides.forEach((item) => item.style.display = 'none');

			dots.forEach((item) => item.classList.remove('dot-active'));

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active')
		}

		function plusSlides(n){
			showSlides(slideIndex += n)
		}
		function currentSlide(n){
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function(){
			plusSlides(-1);
		});
		next.addEventListener('click', function(){
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event){
			for (let i = 0; i < dots.length +1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});

	//Calc

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0,
		mumbai = document.querySelector('#mumbai'),
		kerala = document.querySelector('#kerala'),
		varanasi = document.querySelector('#varanasi');

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function(){
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;

		if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			if (place = mumbai) {
				totalValue.innerHTML = total * mumbai.value;
			} else if (place = kerala) {
				totalValue.innerHTML = total * kerala;
			} else {
				totalValue.innerHTML = total * varanasi.valuev;
			}
		}
	});

	restDays.addEventListener('change', function(){
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;

		if (persons.value == '' || restDays.value == '' || restDays.value == 0 || persons.value == 0) {
			totalValue.innerHTML = 0;
		} else {
			if (place = mumbai) {
				totalValue.innerHTML = total * mumbai.value;
			} else if (place = kerala) {
				totalValue.innerHTML = total * kerala;
			} else {
				totalValue.innerHTML = total * varanasi.valuev;
			}
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
});
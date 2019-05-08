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
		input = form.getElementsByTagName('input'),
		formContact = document.querySelector('#form'),
		inputs = formContact.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest(),
			formData = new FormData(form),
			obj = {};

		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		formData.forEach(function(value, key){
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', function(){
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});
		for (let i = 0; i < input.length; i++) {
			input[i]. value = '';
		}
	});
	

	formContact.addEventListener('submit', function(event) {
		event.preventDefault();
		formContact.appendChild(statusMessage);
	});

	// Form contacts

	formContact.addEventListener('submit', function(event) {
		event.preventDefault();
		formContact.appendChild(statusMessage);

		let tel = document.getElementsByName('tel');
		inputs[0].addEventListener('change', function(e){
			if (!/^[+]?\d+$/.test(this.value)) { 
				tel.value = '';
			}
		}); //как работают регулярные выражения https://javascript.ru/basic/regular-expression+

		let request = new XMLHttpRequest(),
			formData = new FormData(formContact),
			obj = {};
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		formData.forEach(function(value, key){
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', function(){
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});
		for (let i = 0; i < inputs.length; i++) {
			inputs[i]. value = '';
		}
	});
});
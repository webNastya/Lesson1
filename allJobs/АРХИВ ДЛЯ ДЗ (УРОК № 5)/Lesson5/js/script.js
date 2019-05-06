'use strict';

let menu = document.querySelector('.menu'),
	column = document.querySelectorAll('.column'),
	menuItem = document.querySelectorAll('.menu-item'),
	title = document.querySelector('#title'),
	prompt1 = document.getElementById('prompt'),
	li5 = document.createElement("li"),
	adv = document.querySelector('.adv').remove();


//1.1
menu.insertBefore(menuItem[2], menuItem[1]); 

//1.2
 li5.classList.add('menu-item');//new class to new li
 menu.appendChild(li5);
 li5.innerHTML = 'Пятый пункт';

//2
document.body.style.background = 'url(../img/apple_true.jpg)';

//3
title.textContent = 'Мы продаем только подлинную технику Apple';

//5
prompt1.textContent = prompt("Как вы относитесь к технике apple");
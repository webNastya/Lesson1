'use strict';

let menu = document.querySelector('.menu'),
	column = document.querySelector('.column'),
	menuItem = document.getElementsByClassName('menu-item'),
	title = document.getElementsByClassName('title'),
	li5 = document.createElement("li"),//new li
	li2 = document.getElementsByClassName('menu-item[2]'),
	prompt1 = document.getElementById('prompt'),
	adv = document.getElementsByClassName('adv');


//1.1
//document.menu.insertBefore(li2, menu-item[1]); 
//почему-то не работает новый порядок li
//document.menu.replaceChild(menu-item[2], menu-item[1]);

//1.2
 li5.classList.add('menu-item');//new class to new li
 menu.appendChild(li5);
 li5.innerHTML = 'Пятый пункт';

//2
document.body.style.background = 'url(../img/apple_true.jpg)';

//3
//title.innerHTML = 'Мы продаем только подлинную технику Apple';
//не работает

//4
//column.removeChild(adv);
//почему-то не работает

//5
prompt1.textContent = prompt("Как вы относитесь к технике apple");
'use strict'

let money, time,
	startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	chackSavings = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value'),
	countBudgetBtn = document.getElementsByClassName('count-budget-btn'),
	inputs = document.getElementsByTagName('input');

for(let i = 0; i < inputs.length; i++) {
	inputs[i].disabled = true;
	inputs[i].opacity = 0.5;
} 

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
expensesBtn.style.opacity = .5;
optionalExpensesBtn.style.opacity = .5;
countBtn.style.opacity = .5;


for(let i = 0; i < expensesItem.length; i++) {
	expensesItem[i].addEventListener('input', () => {
		let expenses_1 = document.querySelector('#expenses_1'),
			expenses_2 = document.querySelector('#expenses_2'),
			expenses_3 = document.querySelector('#expenses_3'),
			expenses_4 = document.querySelector('#expenses_4');

		if (expensesItem[i].value.length != '') {
			console.log('false');
		}
		
		if (expenses_1.length != '' && 
			expenses_2.length != '' && 
			expenses_3.length != '' && 
			expenses_4.length != '') {

			expensesBtn.disabled = false;
			expensesBtn.style.opacity = 1;
		}
	});
}

for(let i = 0; i < optionalExpensesItem.length; i++) {
	optionalExpensesItem[i].addEventListener('input', () => {
		let expensesItm_1 = document.querySelector('#optionalexpenses_1'),
			expensesItm_2 = document.querySelector('#optionalexpenses_2'),
			expensesItm_3 = document.querySelector('#optionalexpenses_3');

		if (optionalExpensesItem[i].value.length != '') {
			console.log('false');
		}
		
		if (expensesItm_1.length != '' && 
			expensesItm_2.length != '' && 
			expensesItm_3.length != '') {

			optionalExpensesBtn.disabled = false;
			optionalExpensesBtn.style.opacity = 1;
		}
	});
}



startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.appMoney = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
	let sum = 0;
	for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null
             && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        	sum += +b;
        }  else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () { //сделать перезапись 
	for (let i = 0; i < optionalExpensesItem.length; i++) {
        let choose = optionalExpensesItem[i].value;
        if (typeof(choose) === 'string' && (typeof(choose)) != null && 
            choose != '' && choose.length < 50) {
        appData.optionalExpenses[i] = choose;
    	optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }  else {
            i--;
        }
    }
});

countBtn.addEventListener('click', function () { //не работает и не выдаёт ошибок в консоль
	if (appData.appMoney != undefined) {
		let summa = expensesItem[1] + expensesItem[3];
		appData.moneyPerDay = ((appData.appMoney - summa) / 30).toFixed();
	    dayBudgetValue.textContent = appData.moneyPerDay;

	    if (appData.moneyPerDay < 100) {
	        levelValue.textContent = "Минимальный уровень достатка";
	    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	        levelValue.textContent = "Средний уровень достатка";
	    } else if (appData.moneyPerDay > 2000) {
	        levelValue.textContent = "Высокий уровень достатка";
	    } else {
	        levelValue.textContent = "Произошла ошибка";
	    }
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка'
	}	
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    if (typeof(items) === 'string' && (typeof(items)) != null && 
            items != '' && items.length < 50) {
        appData.income = items.split(', ');
    	incomeValue.textContent = appData.income;
     }   
});

chackSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
    } else {
    	appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum1 = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum1/100/12*percent;
		appData.yearIncome = sum1/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum2 = +chooseSum.value,
			percent = +choosePercent.value;

		appData.monthIncome = sum2/100/12*percent;
		appData.yearIncome = sum2/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
    appMoney: money,
    appTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
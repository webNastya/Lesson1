'use strict'

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesItem2 = document.querySelectorAll('.expenses-item'),
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
	countBudgetBtn = document.getElementsByClassName('count-budget-btn');

let money, time;


if (budgetValue[i] = '') {
	countBudgetBtn.disabled = true;

	for (var i = 0; i < expensesItem2.length; i++) {
		expensesItem2[i].disabled = true;
	}
	for (var i = 0; i < expensesItem.length; i++) {
		expensesItem2[i].addEventListener('change', function () {
			if (expensesItem[i] = '') {
				expensesBtn.disabled = true;
			} else {
				expensesBtn.disabled = false;
			}
		});
	}

	for (var i = 0; i < optionalExpensesItem.length; i++) {
		optionalExpensesItem[i].disabled = true;
	}
	for (var i = 0; i < optionalExpensesItem.length; i++) {
		optionalExpensesItem[i].addEventListener('change', function () {
			if (optionalExpensesItem[i] = '') {
				optionalExpensesBtn.disabled = true;
			} else {
				optionalExpensesBtn.disabled = false;
			}
		});
	}

	for (var i = 0; i < budgetValue.length; i++) {
		budgetValue[i].disabled = true;
	}
	for (var i = 0; i < budgetValue.length; i++) {
		budgetValue[i].addEventListener('change', function () {
			if (budgetValue[i] = '') {
				countBudgetBtn.disabled = true;
			} else {
				countBudgetBtn.disabled = false;
			}
		});
	}
} else {
	countBudgetBtn.disabled = false;
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
		let summa = expensesItem2[1] + expensesItem2[3];
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
     }  //else {
    //     i--;
    // }
    // let i = 1; 
    // if(i < appData.income.length) {
    //     appData.income.forEach(function (item) {
    //         alert(i +" Способы доп. заработка: " + item);
    //         i++
    //     });
    // } else {
    //     i--;
    // } 
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
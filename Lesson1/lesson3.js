'use strict';

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    appMoney: money,
    appTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null
             && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        }  else {
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    let allMoney = alert("Бюджет на день: " + appData.appMoney / 30);  
}
detectDayBudget();

function detectLevel() {
    appData.moneyPerDay = (appData.appMoney / 30).toFixed(); //toFixed почему-то не работает
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chackSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
chackSavings();

function chooseOptExpenses() {
        let choose1 = prompt("Статья необязательных расходов?");
        let choose2 = prompt("Статья необязательных расходов?");
        let choose3 = prompt("Статья необязательных расходов?");

        appData.expenses.one = choose1;
        appData.expenses.two = choose2;
        appData.expenses.three = choose3;
}

chooseOptExpenses();
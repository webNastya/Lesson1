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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.appMoney / 30).toFixed();
        alert("Бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chackSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let choose = prompt("Статья необязательных расходов?");
            if (typeof(choose) === 'string' && (typeof(choose)) != null && 
                choose != '' && choose.length < 50) {
            appData.expenses[i] = choose;
            }  else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        for(let i = 0; i < 1; i++) {
            let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)');
            if (typeof(items) === 'string' && (typeof(items)) != null && 
                    items != '' && items.length < 50) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
            }  else {
                i--;
            }
        }
        let i = 1; 
        if(i < appData.income.length) {
            appData.income.forEach(function (item) {
                alert(i +" Способы доп. заработка: " + item);
                i++
            });
        } else {
            i--;
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + appData[key]);
}

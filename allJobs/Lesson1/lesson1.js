'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    mounth = prompt("Введите обязательную статью расходов в этом месяце", "Да"),
    howMuch = prompt("Во сколько обойдется"),
    mounth1 = prompt("Введите обязательную статью расходов в этом месяце", "Да"),
    howMuch1 = prompt("Во сколько обойдется"),

    appData = {
        money: money,
        time: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

appData.expenses[mounth] = howMuch;      
appData.expenses[mounth1] = howMuch1;
let allMoney = alert("Бюджет на день: " + money/30);
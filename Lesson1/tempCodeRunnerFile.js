
let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),

    appData = {
        money: money,
        time: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    }


for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "Да"),
        b = prompt("Во сколько обойдется?");

    appData.expenses[a] = b;
}

let allMoney = alert("Бюджет на день: " + money/30);
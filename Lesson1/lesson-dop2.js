'use strict';

let week = [ "Понедельник", "Вторник", "Среда", "Четверг",
                 "Пятница", "Суббота", "Восресенье"];
for (let count = 0; count < week.length; count++) {
        document.write( week[count] + "<br>");
    if (week[count] == week[5]) {
        document.write( week[5] + "</br>" + "<b><b/>");
    }
    if (week[count] == week[6]) {
        document.write( week[6] + "</br>" + "<b><b/>");
    }
    
}
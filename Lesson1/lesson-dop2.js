'use strict';

let week = [ "Понедельник", "Вторник", "Среда", "Четверг",
                 "Пятница", "Суббота", "Восресенье"];
for (let count = 0; count < 5; count++) {
        document.write( week[count] + "<br>");
    
    // if (week[count] == week[5]) {
    //     document.write( "<b><b/>" + "</br>" );
    // }
    // if (week[count] == week[5]) {
    //     document.write( week[6] + "</br>" + "<b><b/>");
    // }
    
}
for (let i = 4; i >= 6; i++) {
        document.write( week[i] + "<b><b/>" + "<br>");
}
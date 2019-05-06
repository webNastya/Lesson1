'use strict';

for(let simply=2; simply<=100; simply++){
	let count = 0;
  	for (var j = 2; j < simply; j++) {
      if (simply % j) {continue;}
      count++;
    }   
  	if (!count) document.write(simply + ", Делители этого числа: 1 и " + simply + '</br>');
}
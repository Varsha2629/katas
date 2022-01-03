const multiplicationTable = function(maxValue) {
  // Your code here
    for(let i = 1; i <= maxValue; i++){
        let res1 = i * 1;
        for(let j = 2; j <= maxValue; j++) {
            res1 += ' ' + i * j;
        }
        console.log(res1);
    }
};  

console.log(multiplicationTable(10));

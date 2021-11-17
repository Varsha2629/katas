const sumLargestNumbers = function(data) {
    // Put your solution here
    var firstLargNum = 0;
    var secondLargNum = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > firstLargNum) {
        secondLargNum = firstLargNum;
        console.log(secondLargNum)
        firstLargNum = data[i];
        console.log(firstLargNum)
      }
    }
    return firstLargNum + secondLargNum;

};
  
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
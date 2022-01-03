const repeatNumbers = function(data) {
    // Put your solution here
    var str = "";
    for(let i =0; i < data.length; i++){
        let input = data[i][0];
        let times = data[i][1];

        for(let j = 0; j < times; j++){
             str += input;
          
        }
        if(input > 0 && i < data.length-1){            
            str += ", ";       
        }
    }    
    return str;
  };
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
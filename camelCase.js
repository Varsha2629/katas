const camelCase = function(input) {
    // Your code here

  var newStr = '';
 
  for(let i =0; i < input.length; i++){

    if(input[i] === ' '){
    
      newStr += input[i+1].toUpperCase();     
      i++;         

    }else{
      newStr +=input[i];
    }
    
   
  }
return newStr;
}
  
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
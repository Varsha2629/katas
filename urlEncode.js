const urlEncode = function(text) {
    // Put your solution here
    var noSpaces = text.trim();
    var str = "" ;   

    for(let i of noSpaces){
       
        if(i === ' '){
            str += "%20";
          
        }else {
            str += i;
        }
    }
    
    return str;
};
  
 console.log(urlEncode("Lighthouse Labs"));
 console.log(urlEncode(" Lighthouse Labs "));
 console.log(urlEncode("blue is greener than purple for sure"));
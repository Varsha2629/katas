const checkAir = function (samples, threshold) {
    // Code here!
  let polluted;
  let clean = 0;
  let dirty = 0;
  threshold = threshold * 100;

  
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === 'clean') {
      clean++;
      
    }else {
      dirty++;
    }
   
  }
  polluted =  dirty / clean * 100;
  
  if(polluted < threshold){

    polluted = 'clean';
    console.log(polluted);
  } else {
    polluted = 'polluted';
  }  
      
return polluted;
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
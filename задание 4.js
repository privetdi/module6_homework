let numStart = 5;
let numFinish = 22;
let counter = 0;

numStart = numStart-1;
const intervalId = setInterval(function (a) {
   counter=counter+1;
   console.log(a+counter);
}, 1000, numStart); 
setTimeout(()=>clearInterval(intervalId),(numFinish-numStart)*1000);



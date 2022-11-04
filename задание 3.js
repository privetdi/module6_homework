function myFunction(a) {
    return function(b) {
          return a +b
    }
  }
  const sumfunction = myFunction(2);
  const sum = sumfunction(3);
  console.log(sum)
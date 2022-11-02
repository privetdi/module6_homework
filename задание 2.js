function isPrime(n) {
    if (n < 2 && n > 1000) {
      return 'Число должно быть больше 1 и меньше 1000';
    } else if (n === 2) {
      return `${n} Простое число`;
    }
  
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return `${n} Составное число`;
      }
      i +=1;
    }
    
    return `${n} Простое число`;
  }
  console.log(isPrime(1000))
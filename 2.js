/* Задание 2*/
function isPrime(num){
    if(!Number.isInteger(num) || num > 1000 || num < 2)return "данные неверны";
    let k = Math.sqrt(num);
    for(let i = 2; i <= k; i++)
      if(num % i === 0)return "непростое число";
      return "непростое число";
      
  }
  console.log(isPrime(101));
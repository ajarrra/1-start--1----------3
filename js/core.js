// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   }

//   console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); 
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(9));
// console.log(fibonacci(10));



function inicialy (str){
  let strNew = str.split(' ')
  console.log(strNew[0])
  console.log(strNew[1][0])
  console.log(strNew[2][0]);
  
  console.log(strNew[0] + ' ' + strNew[1][0] + ' ' + strNew[2][0]);
  


}

inicialy ("Koshoeva Ajar Koshoevna") //Koshoeva A.K
//inicialy ("Abitov Islam  Kahramanovich") //Abitov I.K


//проверьте отрицательное оно или нет
const number = -4;
// Проверяем, меньше ли число нуля
if (number < 0) {
  // Число отрицательное
  console.log("Число отрицательное");
} else {
  // Число положительное или равно нулю
  console.log("Число положительное или равно нулю");
}


//вывести длину строки
const str = "Привет, мир!";
// Получаем длину строки
const length = str.length;

// Выводим длину строки в консоль
console.log(length); // 12




//четное оно или нет
const num = 10;

// Проверяем, делится ли число на 2 без остатка
if (num % 2 === 0) {
  // Число четное
  console.log("Число четное");
} else {
  // Число нечетное
  console.log("Число нечетное");
}
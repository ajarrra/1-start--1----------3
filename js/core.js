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



// function inicialy (str){
//   let strNew = str.split(' ')
//   console.log(strNew[0])
//   console.log(strNew[1][0])
//   console.log(strNew[2][0]);
  
//   console.log(strNew[0] + ' ' + strNew[1][0] + ' ' + strNew[2][0]);
  


// }

// inicialy ("Koshoeva Ajar Koshoevna") //Koshoeva A.K
// //inicialy ("Abitov Islam  Kahramanovich") //Abitov I.K


// //проверьте отрицательное оно или нет
// const number = -4;
// // Проверяем, меньше ли число нуля
// if (number < 0) {
//   // Число отрицательное
//   console.log("Число отрицательное");
// } else {
//   // Число положительное или равно нулю
//   console.log("Число положительное или равно нулю");
// }


// //вывести длину строки
// const str = "Привет, мир!";
// // Получаем длину строки
// const length = str.length;

// // Выводим длину строки в консоль
// console.log(length); // 12




// //четное оно или нет
// const num = 10;

// // Проверяем, делится ли число на 2 без остатка
// if (num % 2 === 0) {
//   // Число четное
//   console.log("Число четное");
// } else {
//   // Число нечетное
//   console.log("Число нечетное");
// }




//функция которая принимает 2 числа в качестве аргументов и возвращает наибольший общий делитель - наибольшее число , на которое 
// оба числа делятся без остатка 

// function num(a, b) {
//   if (b !== 0) {
//     return num(b, a % b)
//   }
//   return Math.abs(a)
// }

// console.log(num(12, 18))


//1. Сумма чисел: Напишите программу, которая считает сумму всех чисел от 1 до 100.
// let result = 0
// for (let i = 0; i < 101; i++) {
//  result = result + i 
 
// }
// console.log(result)


// //2. Таблица умножения: Создайте таблицу умножения для числа 7 (от 1 до 10).7 14 21 28 35
// for (let i = 1; i < 11; i++) {
//     console.log(i * 7)
// }


//3. Факториал: Рассчитайте факториал числа 10 (10! = 10 × 9 × 8 × ... × 1).

// let factorial = 1
// for (let i = 1; i < 11; i++) {
//     factorial = factorial * i
// }
// console.log(factorial)



//4. Четные числа: Выведите все четные числа от 1 до 50. 2 4 6 8 10 
// for (let i = 2; i <= 51; i++) {
//   if (i % 2 === 0) {
//     console.log (i)
//   }
// }


// //5. Обратный отсчет: Напишите программу, которая выводит числа от 10 до 1 в обратном порядке.
// for (let i = 10; i > 1; i--){
//     console.log(i);
// }


//Степени двойки: Выведите первые 10 степеней двойки (2^0, 2^1, 2^2, ...).

// for (let i = 0; i < 10 ; i++) {
//     console.log(2 ** i);
// }



//9. Среднее арифметическое: Рассчитайте среднее арифметическое чисел от 1 до 100.  сумма всех чисел деленное на количестов этих чисел (50.5)

// let result = 0
// for (let i = 0; i < 101; i++) {
//  result = result + i 
 
// }
// console.log(result / 100)




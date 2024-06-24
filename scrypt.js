
// //Привет мир!
// alert( 'Привет, мир!' );

// //Строгий режим — "use strict"
// "use strict";

// //Переменные
// let name = "Alice"; // можно изменить значение
// const age = 30;     // значение неизменяемое


// //Типы данных
// let number = 42;           // число
// let string = "Hello";      // строка
// let boolean = true;        // логический тип
// let obj = { key: "value" };// объект
// let array = [1, 2, 3];     // массив
// let func = function() {};  // функция
// let und = undefined;       // неинициализированное значение
// let nll = null;            // отсутствие значения
// let sym = Symbol('sym');   // символ

// //Взаимодействие: alert, prompt, confirm
// alert("Привет, мир!"); // сообщение пользователю

// let name = prompt("Введите ваше имя:", ""); // запрос информации у пользователя
// alert(`Привет, ${name}!`);

// let isAdult = confirm("Вам есть 18 лет?"); // запрос подтверждения
// alert(isAdult ? "Вам 18 или больше" : "Вам меньше 18");


// //Преобразование типов
// let str = "123";
// let num = Number(str);     // явное преобразование строки в число

// let value = true;
// let strValue = String(value); // явное преобразование логического значения в строку

// let implicitNum = +"456";  // неявное преобразование строки в число
// let implicitStr = 789 + ""; // неявное преобразование числа в строку

// //Базовые операторы, математика
// let a = 10;
// let b = 5;

// console.log(a + b); // сложение
// console.log(a - b); // вычитание
// console.log(a * b); // умножение
// console.log(a / b); // деление
// console.log(a % b); // остаток от деления
// console.log(a ** b); // возведение в степень

// //Операторы сравнения
// console.log(5 > 3);  // true
// console.log(5 < 3);  // false
// console.log(5 >= 5); // true
// console.log(5 <= 4); // false
// console.log(5 == "5");  // true (нестрогое сравнение)
// console.log(5 === "5"); // false (строгое сравнение)
// console.log(5 != "5");  // false (нестрогое неравенство)
// console.log(5 !== "5"); // true (строгое неравенство)

// //Условное ветвление: if, '?'
// let age = 20;

// if (age >= 18) {
//     console.log("Взрослый");
// } else {
//     console.log("Ребенок");
// }

// let isAdult = age >= 18 ? "Взрослый" : "Ребенок";
// console.log(isAdult);

// //Логические операторы
// let a = true;
// let b = false;

// console.log(a && b); // логическое И (false)
// console.log(a || b); // логическое ИЛИ (true)
// console.log(!a);     // логическое НЕ (false)

// //Операторы нулевого слияния и присваивания: '??', '??='
// let user;
// console.log(user ?? "Guest"); // Guest (если user = null или undefined)

// let name = null;
// name ??= "Guest"; // если name = null или undefined, присваивает "Guest"
// console.log(name); // Guest

// //Циклы while и for
// // while
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// // for
// for (let j = 0; j < 5; j++) {
//     console.log(j);
// }

// //Конструкция "switch"
// let color = "green";

// switch (color) {
//     case "red":
//         console.log("Красный");
//         break;
//     case "green":
//         console.log("Зеленый");
//         break;
//     case "blue":
//         console.log("Синий");
//         break;
//     default:
//         console.log("Неизвестный цвет");
// }

// //Функции
// function greet(name) {
//     return `Привет, ${name}!`;
// }
// console.log(greet("Alice"));

// //Function Expression
// let greet = function(name) {
//     return `Привет, ${name}!`;
// };
// console.log(greet("Bob"));

// //Стрелочные функции, основы
// let greet = (name) => `Привет, ${name}!`;
// console.log(greet("Charlie"));




// // Арифметические операции
// const a = 5;
// const b = 10;
// console.log('Сложение:', a + b);
// console.log('Вычитание:', a - b);
// console.log('Умножение:', a * b);
// console.log('Деление:', a / b);

// // Работа со строками
// const str1 = "Hello";
// const str2 = "World";
// const concatenated = str1 + " " + str2;
// console.log('Конкатенация строк:', concatenated);

// const escapedStr = 'I\'m a string with an escaped quote';
// console.log('Экранирование строки:', escapedStr);

// const templateStr = `Template string: ${str1}, ${str2}`;
// console.log('Шаблонизация строки:', templateStr);

// // Присвоение переменных
// let x = 20;
// x += 5;
// console.log('Присвоение переменной:', x);

// // Логические операции
// const isTrue = true;
// const isFalse = false;
// console.log('Логическое И:', isTrue && isFalse);
// console.log('Логическое ИЛИ:', isTrue || isFalse);
// console.log('Логическое НЕ:', !isTrue);

// // Обработка ошибок – try/catch
// try {
//     // Пример ошибки
//     let result = a / 0;
//     if (!isFinite(result)) {
//         throw new Error('Деление на ноль');
//     }
//     console.log('Результат:', result);
// } catch (error) {
//     console.error('Ошибка:', error.message);
// }



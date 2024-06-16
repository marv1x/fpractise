// Арифметические операции
const a = 5;
const b = 10;
console.log('Сложение:', a + b);
console.log('Вычитание:', a - b);
console.log('Умножение:', a * b);
console.log('Деление:', a / b);

// Работа со строками
const str1 = "Hello";
const str2 = "World";
const concatenated = str1 + " " + str2;
console.log('Конкатенация строк:', concatenated);

const escapedStr = 'I\'m a string with an escaped quote';
console.log('Экранирование строки:', escapedStr);

const templateStr = `Template string: ${str1}, ${str2}`;
console.log('Шаблонизация строки:', templateStr);

// Присвоение переменных
let x = 20;
x += 5;
console.log('Присвоение переменной:', x);

// Логические операции
const isTrue = true;
const isFalse = false;
console.log('Логическое И:', isTrue && isFalse);
console.log('Логическое ИЛИ:', isTrue || isFalse);
console.log('Логическое НЕ:', !isTrue);

// Обработка ошибок – try/catch
try {
    // Пример ошибки
    let result = a / 0;
    if (!isFinite(result)) {
        throw new Error('Деление на ноль');
    }
    console.log('Результат:', result);
} catch (error) {
    console.error('Ошибка:', error.message);
}

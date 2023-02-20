
// Функция для проверки длины строки. Она нам пригодится для валидации формы. Примеры использования функции:

const stringLenghtCheck = (inputString, maxLength) => inputString.length <= maxLength;

stringLenghtCheck('function is working', 20); // Вернет true
stringLenghtCheck('function is working', 10); // Вернет false


// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

// Логика работы функции:
// 1. принимаем строку
// 2. переводим в нижний регистр (что-бы пройти проверку если буквы разного регистра)
// 3. убираем пробелы (что-бы пройти проверку если в палиндроме несколько слов разной длинны)
// 4. разбиваем строку посимвольно
// 5. разворачиваем в обратном порядке
// 6. собираем символы обратно в строку
// 7. сравниваем с строкой которую приняли, но которая так же переведена в нижний регистр и убраны пробелы.

const palindromeCheck = (inputString) => inputString.toLowerCase().replaceAll(' ', '').split('').reverse().join('') === inputString.toLowerCase().replaceAll(' ', '');

palindromeCheck('топот'); // Вернет true
palindromeCheck('Лёша на полке клопа нашёл '); // Вернет true
palindromeCheck('Лёша на полке клопа нашёк '); // Вернет false

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:


function extractingNumbers(inputString) {

  let extractedNumber = '';

  inputString.replaceAll('.', '');
  inputString.replaceAll(' ', '');

  if (inputString === Number.isInteger(inputString)) {
    return Math.abs(inputString);
  }

  else {
    for (let i = 0; i <= inputString.length; i++) {

      const parsed = parseInt(inputString[i], 10);

      if (parsed === Number(inputString[i])) {
        extractedNumber += inputString[i];
      }
    }

    if (Number(extractedNumber)) {
      return extractedNumber;
    }

    return NaN;

    // if (isNaN(extractedNumber)) {
    //   return NaN;
    // }

    // return Number(extractedNumber);
  }
}

extractingNumbers('ECMAScript 2022'); // Функция вернет 2022
extractingNumbers('1 кефир, 0.5 батона'); // Функция вернет 105
extractingNumbers(''); // Функция вернет 0, надо подумать почему функция не возвращает NaN


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.


const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};


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

    if (isNaN(extractedNumber)) {
      return NaN;
    }

    return Number(extractedNumber);
  }
}

extractingNumbers('ECMAScript 2022'); // Функция вернет 2022
extractingNumbers('1 кефир, 0.5 батона'); // Функция вернет 105
extractingNumbers('ECMAScript 2022'); // Функция вернет 2022


// имя_функции('2023 год');            // Результат: число 2023
// имя_функции('ECMAScript 2022');     // Результат: число 2022
// имя_функции('1 кефир, 0.5 батона'); // Результат: число 105
// имя_функции('а я томат');           // Результат: NaN
// Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:

// имя_функции(2023); // Результат: число 2023
// имя_функции(-1);   // Результат: число 1
// имя_функции(1.5);  // Результат: число 15
// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

// Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// // Добавочный символ использован один раз
// имя_функции('1', 2, '0');      // Результат: строка '01'

// // Добавочный символ использован три раза
// имя_функции('1', 4, '0');      // Результат: строка '0001'

// // Добавочные символы обрезаны с конца
// имя_функции('q', 4, 'werty');  // Результат: строка 'werq'

// // Добавочные символы использованы полтора раза
// имя_функции('q', 4, 'we');     // Результат: строка 'wweq'

// // Добавочные символы не использованы, исходная строка не изменена
// имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'
// Попробуйте не использовать при этом функцию padStart() =)

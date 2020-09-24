/*Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
 (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

const findLongestWord = function (string) {
  //   debugger;
  let words = string.split(' ');

  let wordLongest = '';
  let wordLength = 0;
  for (let i = 0; i <= words.length; i += 1) {
    if (words[i].length > wordLength) {
      wordLength = word[i].length;
      wordLongest = word[i];
      //   console.log(wordLongest);
    }
  }
  return wordLongest;
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

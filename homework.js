//перевірка на наявність вбудованого коду

// let userInput = prompt('Введіть своє повідомлення', "Пишіть тут");

// function addUserInput() {
//     if (userInput.indexOf('${') !== -1 && 
//         userInput.indexOf('}') !== -1 && 
//         userInput.indexOf('${') < userInput.indexOf('}') &&
//         userInput.indexOf('}') !== userInput.indexOf('${')+2) {
//       console.log('так, ви ввели шматок коду')
//     } else {
//       console.log('ні це не вбудований код')
//     }
// };

// addUserInput();
/*
 function getExtremeElements(array) {
  // Change code below this line
  const args = Array.from(array);
     const firstEl = args.splice(0, 1);
     
     const last = args.splice(-1, 1);

     const result = firstEl.concat(last);
     
     return console.log( result );

  // Change code above this line
};

getExtremeElements([1, 2, 3, 4, 5]);
 // повертає [1, 5]
getExtremeElements(["Earth", "Mars", "Venus"]);
// повертає ["Earth", "Venus"]
getExtremeElements(["apple", "peach", "pear", "banana"]);
// повертає ["apple", "banana"]

Термін slug - це людино-зрозумілий унікальний ідентифікатор,
 який використовується у веб-розробці для створення 
 читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив 
в адресному рядку mysite.com/posts/1q8fh74tx, 
можна зробити slug з назви статті. В результаті 
адреса буде приємнішою для сприйняття:
 mysite.com/posts/arrays-for-begginers.
Увага

Slug - це завжди рядок у нижньому регістрі,
 слова якого розділені тире.
*/


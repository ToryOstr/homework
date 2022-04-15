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

 
function isN() {

    let n = +prompt("введіть число", 0); 
    switch (true) {
        case (n === Number):
             message = `Ви ввели ${n} . Дякую!`;
            break;
        
        case (n === null):
        case (n === isNaN):
        
             message = `${n} Це ж не число!`;
            break;
        
    };
    
    return message;
};
isN();




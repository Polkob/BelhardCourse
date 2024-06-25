// 1) Игра “Угадай число”
// . . . . . . . . . . . . . . . . .

// let value = Math.floor(Math.random()*(100 - 1) + 1);
// console.log(value);

// while(true){
//     let answerUser = (prompt("Введите число:"));
//     console.log(value);
//     // if(!answerUser){
//     //     alert("Ничего, получится в другой раз");
//     //     break;
//     // }

//     // if(Number(answerUser) < value){
//     //     alert("Маловато, нужно больше");
//     // }else if(Number(answerUser) > value){
//     //     alert("Многовато, нужно меньше");
//     // }else if(Number(answerUser) == value){
//     //     alert("Верно! Ура, победа!");
//     //     break;
//     // }
//     switch(true){
//         case !answerUser:
//             alert("Ничего, получится в другой раз");
//             break;
//         case Number(answerUser) < value:
//             alert("Маловато, нужно больше");
//             continue;
//         case Number(answerUser) > value:
//             alert("Многовато, нужно меньше");
//             continue;
//         case Number(answerUser) == value:
//             alert("Верно! Ура, победа!");
//             break;
//     }
//     break;
// }

// . . . . . . . . . . . . . . . . .

// 2) Сколько мне лет?
// . . . . . . . . . . . . . . . . .

// let birthDateInput = prompt("Пожалуйста, введите вашу дату рождения в формате 'мм/дд/гггг':");

// let birthDate = new Date(birthDateInput);

// console.log(birthDate);

// let currentDate = new Date();

// let ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
// let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
// let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
// let ageInDaysInCurrentYear = Math.floor(ageInDays - (ageInYears * 365.25));
// let daysUntilBirthday = Math.floor(365.25 - ageInDaysInCurrentYear);

// if (birthDate > currentDate) {
//     alert("Ого, вы пришли к нам из будущего?");
// } else {
//     console.log(`Ваш возраст: ${ageInYears} лет и ${ageInDaysInCurrentYear} дней`);
//     console.log(`До дня рождения осталось: ${daysUntilBirthday} дня`);
// }

// . . . . . . . . . . . . . . . . .

// 3) Напишите функцию, которая будет вычислять площадь прямоугольной фигуры
// . . . . . . . . . . . . . . . . .

// function calculateArea(length, width = length){

//     return length * width;
// }

// function calculateAreaDefault(length = 1, width = length){

//     return length * width;
// }

// console.log(calculateArea(2,4));
// console.log(calculateArea(5));
// console.log(calculateAreaDefault(3));

// . . . . . . . . . . . . . . . . .

// 4*) Используя замыкания, создайте функцию счётчик
// . . . . . . . . . . . . . . . . .

// function createCounter(){
//     let value = 0;

//     function showValue(){
//         console.log("Current value: " + value);
//     }

//     function increaseValue(){
//         value++;
//         showValue();
//     }

//     function decreaseValue(){
//         value--;
//         showValue();
//     }

//     function addValue(num){
//         value+=num;
//         showValue();
//     }

//     function restart(){
//         value = 0;
//         showValue();
//     }

//     return {
//         increaseValue,
//         decreaseValue,
//         addValue,
//         restart
//       };
// }

// let myCounter = createCounter();
// let myCounter2 = createCounter();


// myCounter.increaseValue(); 
// myCounter.increaseValue(); 
// myCounter.decreaseValue(); 
// myCounter.addValue(5); 
// myCounter.restart(); 

// myCounter2.increaseValue(); 
// myCounter2.addValue(-3); 
// myCounter2.restart(); 

// . . . . . . . . . . . . . . . . .
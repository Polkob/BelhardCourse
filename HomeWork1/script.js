//Tasks 2-3
//let ageUser = 20;
// let nameUser = "Polina";
// let isConfirm = confirm("Вы прошли проверку?");

// if (isConfirm) {
//     alert("Вы авторизированы!");
// } else {
//     alert("Необходимо пройти проверку!");
//     let a = 3;
//     let b = 5;
//     while (!isConfirm) {
//         let sum = a + b;
//         answerQuestion = prompt(`Чему равно ${a} + ${b}?`)
//         console.log(answerQuestion);
//         if(!answerQuestion){
//             alert("Вы не прошли проверку!");
//             break;
//         }
//         answerQuestion = Number(answerQuestion);
//         if ( answerQuestion === sum) {
//             alert("Вы прошли проверку и авторизированы!");
//             if (ageUser % 2 != 0){
//                 alert("Поздравляю! Для вас доступна специальная акция!")
//             }
//             isConfirm = true;
//         } else if (!answerQuestion){
//             a++;
//             b++;
//             alert("Вы не прошли проверку! Повторите попытку.");
//         } 
//     }
// }

//Task 4
// let a = prompt("Введите первое число:");
// if (isNaN(a)) {
//     alert("Вы не то ввели");
// } else {
//     let b = prompt("Введите второе число:");
//     if (isNaN(b)) {
//         alert("Вы не то ввели");
//     } else {
//         let sum = Number(a) + Number(b);
//         alert(`Их сумма равна ${sum}`);
//     }
// }
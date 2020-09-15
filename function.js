// Function Declaration
// function f () {}


// Function Arrow
// () => {}


// Function Expression
// const f = function () {}
// const f = () => {}


// const arr = [true, 2123, 33, 4121, "aasd"];
// let count = 0;
// const interval = setInterval(() => {
//   if (count === arr.length) {
//     clearInterval(interval);
//     console.log("End arr!");
//   } else {
//     console.log(arr[count]);
//     count++;
//   }
// }, 1000);


//Параметры по умолчанию
// (a = 0, b = 0) => a + b;

//... - rest оператор
// (a, b, ...rest) => {};


//Замыкание - возвращение одной функции другой, с сохранившемся контекстом
// const f1 = (numberFirst) => {
//   return (numberSecond) => {
//     return numberFirst + numberSecond;
//   };
// };
// //Каждый раз увеличиваем число на 20
// const a = f1(20);
// console.log(a(10));
// console.log(a(40));
// console.log(a(143));
// console.log(a(190));
// console.log(a(1000));
// //Каждый раз увеличиваем число на 5
// const b = f1(5);
// console.log(b(5));
// console.log(b(10));
// console.log(b(95));
// console.log(b(876));
// console.log(b(900));
// console.log(b(1000));


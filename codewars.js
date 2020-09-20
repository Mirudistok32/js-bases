//Складываем только все положительные числа в массиве
// const posSum = (arr) => {
//   return arr.reduce((acc, i) => {
//     return acc += i > 0 ? i : 0;
//   }, 0);
// };
//Opposite number
// const opposite = (num) => {
//   return -num;
// };
//makeNegative
// const makeNegative = (num) => (num > 0 ? -num : num);

// console.log(Math.abs(5));
// console.log(Math.abs(-6));
// console.log(Math.abs(9));
// console.log(Math.abs(-14));
// console.log(Math.abs(10));
// console.log(Math.abs(-90));
// console.log(-Math.abs(10));

//String repeat
// const repeatStr = (num, str) => str.repeat(num);
// console.log(repeatStr(5, 'Hellow'));

//Find the smallest integer in the array
// const numberArr = [12, -2, 32, 5, 4, 2, 1, 0, 95];
// const minValueToArray1 = (arr) => Math.min(...arr);
// const minValueToArray2 = (arr) => {
//   let minValue = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (minValue > arr[i]) minValue = arr[i];
//   }
//   return minValue;
// };
// console.log(minValueToArray2(numberArr));

//Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
// const isDivideBy = (number, a, b) =>
//   number % a === 0 && number % b === 0
// console.log(isDivideBy(12, 5, 3));
// console.log(isDivideBy(12, 4, 3));
// console.log(isDivideBy(15, 5, 3));
// console.log(isDivideBy(15, 2, 5));

// #arr creates a new array with the numbers 0 to N-1
//  should return an array
//  should return a blank array when called with no argument
//  should return 0 to 3 when called with 4
// const name1 = (length) => {
//   return length ? [...new Array(length)].map((_, i) => i) : []
// };
// const arr = n => Array.from({length: n}, (_, i) => i);
// console.log(arr());

//Prototype
// const person = {
//     ears: 2,
//     eyes: 2
// }
// const stas = {
//     age: 12
// }
// stas.__proto__ = person
// console.log(stas.ears)

// //bind
// function askPassword(ok, fail) {
//   let password = "rockstar";
//   // let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// //bind
// function askPassword(ok, fail) {
//   let password = "rockstar"
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "John",

//   login(result) {
//     console.log(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); //

//JSON
// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// console.log(typeof JSON.stringify(user))
// console.log(typeof JSON.parse(JSON.stringify(user)))
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value === meetup ? undefined : value;
//   })
// );

// Set
// function unique(arr) {
//   const uniqueCollection = new Set(arr);
//   const newArrey = [];
//   uniqueCollection.forEach((v) => {
//     newArrey.push(v);
//   });
//   // arr.forEach(element => {
//   //     uniqueCollection.add(element)
//   // });
//   return newArrey;
// }
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(values));
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// const aclean = (arr) => {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// };
// console.log(aclean(arr));
// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys)
// function Bike(model, color) {
//     this.model = model
//     this.color = color
// }
// Bike.prototype.getDetails = function () {
//     return 'Эта ' + this.model + ' велосипеда имеет ' + this.color + ' цвет.'
// }
// const o1 = new Bike('red', 'tesla')
// const o2 = new Bike('blue', 'ford')
// console.log(o1.getDetails())
// console.log(o2.getDetails())

// const foo1 = (a, v, ad, ff, sa, ee) => {
//   console.log(`This is function foo1`);
// };
// foo1.foo2 = function hi() {
//   console.log(`Hi!`);
// };
// foo1.foo3 = () => {console.log(`I'm study programming!`)}
// foo1.foo2()
// foo1.foo3()
// foo1.foo4 = () => {console.log(`I will a programmer!`)}
// foo1.foo5 = () => {console.log(`I will make a lot of money!`)}
// foo1.foo4()
// class Person {}
// const a = new Person();
// console.log(Person.prototype.__proto__);
// const num = 14
// console.log(num.__proto__.__proto__.__proto__)
// function name(params) {}
// console.log(name.__proto__.__proto__.__proto__)
// (function (a, b, c) {
//     arguments[2] = (typeof arguments).length;
//     c > 10 ? console.log(c) : console.log(++c);
// })(1, 2, 3);
// const title = (x) => ++x + x++;
// console.log(title(10))
// (function js(x) {
//     const y = (j) => j * x;

//     console.log(y(s()));

//     function s() {
//         return j();
//     }

//     function j() {
//         return x ** x;
//     }
// })(3);
// function a(x) {
//     x++;
//     return function () {
//         console.log(++x);
//     };
// }
// a(1)();
// a(1)();
// a(1)();
// let x = a(1);
// x();
// x();
// // x();
// (function js(x) {
//     const y = (j) => j * x;

//     console.log(y(s()));

//     function s() {
//         return j();
//     }

//     function j() {
//         return x ** x;
//     }
// })(3);
// let a = 5;
// setTimeout(function timeout() {
//     console.log('timout');
//     a = 10;
// }, 0);
// let p = new Promise(function(resolve, reject) {
//     console.log('a.in.newPromise');
//     a = 25;
//     resolve();
// });
// p.then(function(){
//     console.log('p.then')
// });
// console.log('Default a');
// const arr = [];
// for (let i = 0; i < 1000000; i++) {
//   arr[i] = 2 ** i;
// }
// let num = 10
// const name1 = () => num++
// // const name2 = () => num++ + ++num
// // const name3 = () => ++num
// // const name4 = () => ++num + num++
// console.log(name1())
// function Name() {}
// const name = (params) => {};
// const o = {};
// console.log(o + 1);
// console.log({} + 1);
// console.log(new Name() + 1);
// console.log(name);
// console.log(name + 1);
// function* startGame() {
//     const answer = yield "Ты любишь JavaScript?";
//     if (answer !== "Да") {
//         return "Как интересно... В таком случае что ты здесь делаешь?";
//     }
//     return "JavaScript тоже тебя любит ❤️";
// }
// const game = startGame();
// console.log(game.next().value);
// console.log(game.next("Да").value);
// const id = 10;
// const getID = (...id) => {
class Chameleon {
  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.newColor);

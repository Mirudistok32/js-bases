// function Name() {
// }
// function Kiora(name, ...career) {
//     this.name = name;
//     return new Name();
// }
// var student1 = new Kiora("Vuong11");
// var student2 = new Kiora("Vuong22");
// console.log(student1.name); //undefined
// console.log(student2.name); //undefined
// //############################

// //############################
// function foo(a) {
//   a++;
//   return function loo() {
//     console.log(++a);
//   };
// }
// foo(10)();
// foo(10)();
// foo(10)();
// console.log(`foo2###########`);
// const foo2 = foo(10);
// foo2();
// foo2();
// foo2();
// console.log(`foo3###########`);
// const foo3 = foo(10)
// foo3()
// foo3()
// foo3()
// //############################

// //############################
const id = 10;
const getID = (...id) => {
    id(id);
    function id(id) {
        console.log(typeof id, id);
    }
};
getID(id);
// //############################
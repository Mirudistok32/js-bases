//var, const, let

//var - устаревшая конструкция. Она имеет область видимости: глобальную,
//что может привести к неожидаемому результату

//let и const - es5, они имеют область видимости: блочную, т.е.
//они будут видны внутри того блока, в котором объявлены

//различие между let и const в том, что в const нельзя изменить значение, в let можно

const countBook = 192;
let nameBook = "У опушки леса";

console.log(countBook);
console.log("Name book is " + nameBook);
console.log(`Name book is ${nameBook}`);

//Типы
// Number, String, Boolean, Null, Undefined, Object, Symbol, BigInt
// Условные оператор if и его связка через else if, && || , булевая алгебра, == и ===,
// Функции, массивы, цыклы, switch, объекты
// const arr1 = ['123', 'stro', 'we', 'go']
// const arr2 = ['1', '2', '3', '4']


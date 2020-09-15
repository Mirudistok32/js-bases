const obj = {
  arr: [1, 2, 3, 4],
  f: () => {
    console.log("obj func");
  },
  "this is key1": true,
  ["number_" + ("3" + 2)]: ["s", "t", "rin", "g"],
  props: "react",
};
// console.log(obj["this is key1"]);
// Удаляем
// delete obj.props;

// //Деструкторизация, переименование и по умолчанию
// const { arr: arrayMy = [], f: funcMy = () => console.log("Default") } = obj;
// const { "this is key1": thisIsKey } = obj;
// console.log(arrayMy);
// funcMy();
// console.log(thisIsKey);

// //Может заходить в прототип объекта
// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const keys = Object.keys(obj);
// console.log(keys)

//Контекст
// .bind(obj)
// .apply(obj)
// .call(obj)
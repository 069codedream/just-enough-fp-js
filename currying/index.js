// 柯里化 Curring

// 把多参数函数重构为每次接收一个参数，将余下的参数作为返回的函数的参数，直到它收到所有的参数并最终求值。
const add = x => y => x + y;

const addFive = add(5); // returns a function awaiting a second value
console.log(addFive(4)); // 9
console.log(addFive(15)); // 20
console.log(addFive(8)); // 13

console.log(add(5)(10)); // 15

// 用普通函数的形式，更易看出最内部的函数可以取到外面每一层函数的参数（通过闭包）。
function add2(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

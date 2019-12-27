// 高阶函数 Higher order functions(HOC)

// 高阶函数是指至少具有下列功能之一的函数：
//   1. 允许一个函数作为参数。
//   2. 返回一个新的函数。
const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count: ${++count}`);
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log(countedAdd(1, 2));
// Call count : 1
// 3
console.log(countedAdd(2, 2));
// Call count : 2
// 4
console.log(countedAdd(3, 2));
// Call count : 3
// 5

// 因为闭包的原因，count会每次+1，不会被初始化为0

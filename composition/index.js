// 组合 composition

//将几个函数组合起来创建一个新函数。

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

// 这种组合是把一个函数嵌套在另一个函数中，将其返回值作为输入传递给另一个。
// 但是这样并没有创建一个新函数，而且嵌套增加了复杂度和降低了可读性。
console.log(repeat(exclaim(scream('hello world!'))));

// 接收任意数量的函数作为参数，x为初始值，使用reduceRight依次执行
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
// 将三个函数组合在一起
const withExuberance = compose(repeat, exclaim, scream);

console.log(withExuberance('hello world!'));

//在某些库中，比如Ramda和Lodash/FP，会有pipe函数，它与compose相同，只是函数是从左到右简化的，而不是从右到左。
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const withExuberance2 = pipe(scream, exclaim, repeat);

console.log(withExuberance2('hello world!'));

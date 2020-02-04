// Associative Property 结合律

//函数组合服从数学的结合律。
// 1 + 2 + 3
// (1 + 2) + 3
// 1 + (2 + 2)

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

//这些操作都是等价的。
//结合律使我们可以通过组合创建更加复杂的代码
const comp1 = compose(repeat, exclaim, scream);
const comp2 = compose(compose(repeat, exclaim), scream);
const comp3 = compose(repeat, compose(exclaim, scream));

console.log(comp1('x'), comp2('x'), comp3('x'));

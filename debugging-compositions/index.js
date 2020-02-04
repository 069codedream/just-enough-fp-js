// Debugging Compositions 在组合中调试

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const map = fn => xs => xs.map(fn);
const split = pattern => str => str.split(pattern);
const join = separator => xs => xs.join(separator);
const lowerCase = str => str.toLowerCase();

// 因为组合是纯函数，去掉了副作用，所以很难进行调试，
// 我们需要创建一个“逃生舱”

//trace函数使用了逗号操作符(comma operator)，打印后返回x的值，实现副作用。
//逗号操作符参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator
const trace = msg => x => (console.log(msg, x), x);

const bookTitles = [
  'The Culture Code',
  'Designing Your Life',
  'Algorithms to Live By',
];

let slugify = compose(map(join('-')), map(lowerCase), map(split(' ')));

try {
  console.log(slugify(bookTitles));
} catch (error) {
  console.log(error); // 出错了，str.toLowerCase is not a function
}

// 在组合中添加trace函数来调试，由于compose是从有到左的所以before split在前
slugify = compose(
  map(join('-')),
  trace('after lowercase'),
  map(lowerCase),
  trace('after split'),
  map(split(' ')),
  trace('before split')
);

// 根据打印的信息，我们可以发现split后的每一项是数组， 而tolowerCase接收的是字符串，所以会出错。
try {
  console.log(slugify(bookTitles));
} catch (error) {
  console.log(error);
}
// before split [ 'The Culture Code', 'Designing Your Life', 'Algorithms to Live By' ]
// after split [
//   [ 'The', 'Culture', 'Code' ],
//   [ 'Designing', 'Your', 'Life' ],
//   [ 'Algorithms', 'to', 'Live', 'By' ]
// ]

// 调整顺序，把lowerCase放在第一个。
slugify = compose(map(join('-')), map(split(' ')), map(lowerCase));

// 得到预期结果，debug完成。
console.log(slugify(bookTitles));
// [ 'the-culture-code', 'designing-your-life', 'algorithms-to-live-by' ]

// 上面函数map执行了三次，不够精简。
// 我们可以对函数进行组合，并将其一次传递到map中。
// 组合的威力在此体现出来了。
const slugify = compose(map(compose(join('-'), split(' '), lowerCase)));

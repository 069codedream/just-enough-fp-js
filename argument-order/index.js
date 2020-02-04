// 柯里化函数中的参数顺序 Argument Order in Curried Functions

//柯里化过的函数中参数顺序不同会带来很大的可用性的差距

// 先传入数组，除了直接调用数组的map方法，并没有带来其他用处
const map = array => cb => array.map(cb);

const arr = [1, 2, 3, 4, 5];
const double = n => n * 2;

const withArr = map(arr);

console.log(withArr(double)); // [2, 4, 6, 8, 10]
console.log(withArr(n => n * 3));

//先传入回调函数，创建withDouble函数，可以传入任何要执行double操作的数组，使函数更有用。
const map2 = cb => array => array.map(cb);

const withDouble = map2(double);

console.log(withDouble(arr));
console.log(withDouble([2, 4, 6, 8, 10]));

// 参数的排序可以按照：
// Most specific => least specific 最具体 => 最不具体
const prop = key => obj => obj[key];

const propName = prop('name');

const people = [
  { name: 'Jamon' },
  { name: 'Shirley' },
  { name: 'Kent' },
  { name: 'Sarah' },
  { name: 'Ken' },
];

const names = map2(propName)(people);
console.log(names);

// 纯函数 Pure Functions

// 对于固定的输入总会有固定的输出，例如数学里的f(x) = x + 1，改写成JavaScript就是：
const f = x => x + 1;
// 这个函数不会对程序或外部世界带来任何的side effects（副作用）。

// 下面是一些impure（非纯函数）的例子，用作对比。

// Impure Function ex. 1 - Output not derived solely from inputs
const COST_OF_ITEM = 19;
// const COST_OF_ITEM = 18;
function cartTotal(quantity) {
  return COST_OF_ITEM * quantity;
}

cartTotal(2); // 38
// cartTotal(2); //  36

// 受到全局变量影响

// Impure Function ex. 2 - Same input, different output
function generateID() {
  return Math.floor(Math.random() * 10000);
}

function createUser(name, age) {
  return {
    id: generateID(),
    name,
    age,
  };
}

createUser('孙笑川', 100); // { id: 6324, name: "孙笑川", age: 100 }
createUser('孙笑川', 100); // { id: 3884, name: "孙笑川", age: 100 }
createUser('孙笑川', 100); // { id: 9347, name: "孙笑川", age: 100 }

// 受到非纯函数影响

// Impure Function ex. 3 - Side Effects
let id = 0;
function createFoodItem(name) {
  return {
    id: ++id,
    name,
  };
}

createFoodItem('煎饼果子'); // { id: 1, name: '煎饼果子' }
createFoodItem('烤冷面'); // { id: 2, name: '烤冷面' }
createFoodItem('手抓饼'); // { id: 3, name: '手抓饼' }

// 修改了变量id，带来副作用。

// Impure Function ex. 4 - Side Effects #2
function logger(message) {
  console.log(message);
}

// 输出log属于影响外部世界，也是副作用。

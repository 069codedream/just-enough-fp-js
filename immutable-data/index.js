// 不可变数据 Immutable Data

// 不可变数据在函数式编程中是必需的，因为突变/转变（mutation）是一种副作用。
// 数据转换不应该影响原始数据源，而是应该返回一个应用了更新的新数据源。

class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

// const mg1 = new MutableGlass('water', 100);
// const mg2 = mg1.takeDrink(20);
// console.log(mg1 === mg2); // true
// console.log(mg1.amount === mg2.amount); // true
// 指向同一个对象

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
  }
}

// const mg1 = new ImmutableGlass('water', 100);
// const mg2 = mg1.takeDrink(20);
// console.log(mg1 === mg2); // false
// console.log(mg1.amount === mg2.amount); // false
// 非同一个对象

// 常见用例：redux里的reducer总是通过返回新的store来更新数据。
function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
}

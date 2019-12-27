// 无参数（风格） Pointfree

//将指定的函数作为参数传递，以避免编写带有临时变量的匿名函数。
// 好处:
// - 可读性
// - 减少bug的覆盖面
// - 具名函数用于单元测试
const arr = [1, 2, 3];
arr.map(x => x * 2); // [2, 4, 6]

const double = x => x * 2;
arr.map(double); // [2, 4, 6]

//React中的使用
// const Item = ({ id, text }) => <li key={id}>{text}</li>;

// const List = ({ items }) => <ul>{items.map(Item)}</ul>;

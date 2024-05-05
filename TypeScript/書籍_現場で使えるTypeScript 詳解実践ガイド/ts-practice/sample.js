console.log("Hello,TypeScript");
var firstName = "Bill";
var age = 22;
// リテラル型
var adultAge;
// ユニオン型とリテラル型
var eventType;
eventType = "click";
var pet = "shibe";
var book = {
    title: "こころ",
    author: "夏目漱石",
    publishedIn: 1914,
};
var alice = {
    name: "Alice",
    age: 28,
};
var bob = {
    name: "Bob"
};
var alice2 = {
    name: "Alice",
    age: 30,
};
alice2.age = 31;
// 型注釈によるArray型の指定
var fruits;
fruits = ["Apple", "Grape", "Banana", "Peach", "Pear"];
// 型注釈によるTuple型の指定
var person = ["Alice", 30];
var a = [1];
var b = [1, "hello"];
var c = [1, "hello", true, 10, "world"];
var myCar = {
    enginType: "V8",
    volume: 3000,
    wheelCount: 4
};

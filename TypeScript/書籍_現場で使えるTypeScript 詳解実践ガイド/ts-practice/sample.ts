console.log("Hello,TypeScript")

let firstName:string = "Bill";
let age:number = 22;

// リテラル型
let adultAge:18;

// ユニオン型とリテラル型
let eventType: "click" | "hover" | "keydown";
eventType = "click";

// 型エイリアスのユニオン型
type Animal = Cat | Dog;

type Cat = "mike" | "dora" | "persian";
type Dog = "shibe" | "poodle" | "pug";

let pet:Animal = "shibe";

// 型エイリアスを用いたオブジェクト型の定義
type Book = {
  title:string;
  author:string;
  publishedIn:number;
};

const book:Book = {
  title:"こころ",
  author:"夏目漱石",
  publishedIn:1914,
}

// オプショナルプロパティ
type Person = {
  name:string;
  age?:number;
};

const alice:Person = {
  name: "Alice",
  age:28,
}

const bob:Person = {
  name:"Bob"
}

// 読み取り専用プロパティ
type ImmutablePerson = {
  readonly name:string;
  age:number;
}

const alice2:ImmutablePerson = {
  name:"Alice",
  age:30,
}

alice2.age = 31;

// 型注釈によるArray型の指定
let fruits:string[];
fruits = ["Apple","Grape","Banana","Peach","Pear"];

// 型注釈によるTuple型の指定
const person:[string,number] = ["Alice",30];

// ラベル付きTuple型
// タプルの要素のオプション化
type Foo = [first:number,second?:string,...rest:any[]];

let a:Foo = [1];
let b:Foo = [1,"hello"];
let c:Foo = [1,"hello",true,10,"world"];

// インターセクション型の利用
type Engine = {
  enginType:string;
  volume:number;
};

type Wheels = {
  wheelCount:number;
}

type Car = Engine & Wheels;

const myCar:Car = {
  enginType:"V8",
  volume:3000,
  wheelCount:4
}
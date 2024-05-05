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

// any型の変数の挙動
let value1:any = 1;
value1 = "noTypeCheck";
value1.noCheck();

let value2:any = [1,2,3];
let value3 = value1 + value2;

// unknown型の変数への代入
let value4:unknown = 1;

// NG
// let value5:number = value4;

// unknown型の変数の演算
let value6:unknown = 1;

// NG
// console.log(value6 + 1);
// unknown型の変数との+演算は許可されない

// unknown型の変数を他の型へ特定
// unknown型の変数に対して可能な操作は限られているが、比較演算は許可されている
let value7:unknown = 10;
if(typeof value7 === "number") {
  console.log(value7 + 1);
}

// any型は型チェックを完全に放棄するが、unknown型は型の検証を要求する。これにより、型の安全性を維持しながら未知の型を扱うことが可能になる

// 厳格なnullチェックによるエラー
{
  const person = {
    age:25,
    firstName:Math.random() > 5 ? "Alice" :null,
  };

  // NG. firstNameプロパティがnullである可能性があるためエラー
  // console.log(person.firstName.toUpperCase()); 
  // OK
  console.log(person.firstName?.toUpperCase()); 
}

// 関数のパラメータ、戻り値の型注釈
function addNumber(a:number,b:number):number {
  return a + b;
}

// 関数のオプショナルパラメータ
{
  function printMessage(message?:string){
    if(message){
      console.log(message)
    }else{
      console.log("No message provided.");
    }
  }

  printMessage("Hello world!");
  printMessage();
}

// 関数型の構文
{
  let myFunction: (arg1:number,arg2:string) => boolean;
}

// 関数型と型エイリアス
{
  type AddFunction = (a:number,b:number) => number;
  const addNumbers:AddFunction = (a,b) => a + b;
}

// 関数型の戻り値の型がvoid型の場合
// 戻り値としてvoid型が指定された関数型の変数に、実際には値を返す関数を代入することが可能。その場合、戻り値の型情報は無視される
{
  type ReturnVoid = () => void;

  // OK. 実際にはstring型の値を返す関数の代入
  const greetWorld:ReturnVoid = () => {
    return "Hello, World!";
  }

  // resultの型はvoidとして扱われ、関数の戻り値の型情報は無視される
  const result = greetWorld(); // void型

  // NG. TypeScriptは、resultの型をvoidと見なしているため、string型のメソッドは使えない
  // console.log(result.toUpperCase());
}

// never型
// void型が関数を何も返さないことを示すのに対し、never型は関数が正常に戻る「終了点」を持たないことを意味する
// 無限ループや再起的な関数のように、終了しない関数
// 例外をスローしてプログラムを異常終了させる関数
// 到達不可能なコードのパスを示す場合
{
  function throwError(message:string):never {
    throw new Error(message);
  }

  function infiniteLoop():never{
    while(true){
      console.log("infinite loop!");
    }
  }
}

// 関数オーバーロード
{
  // オーバーロードのシグネチャ
  function addNumbers(a: number, b: number): number;
  function addNumbers(a: string, b: string): string;
  function addNumbers(a: number, b: string): string;
  function addNumbers(a: string, b: number): string;

  // 関数本体
  function addNumbers(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return a.toString() + b.toString();
    }
  }

  let result = addNumbers("1", "2"); // result は string 型として推論される
  // string 型と推論されているためエラーにならない
  console.log(result.includes("1")); // true
}
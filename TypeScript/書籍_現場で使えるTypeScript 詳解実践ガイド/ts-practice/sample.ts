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

// インターフェイスの宣言
{
  interface Person {
    name: string;
    age: number;
  }
  
  // 変数 john に Person インターフェイスを指定
  let john: Person = {
    name: "John",
    age: 30,
  };
  
  // NG
  // john = "John";
  // >> Type 'string' is not assignable to type 'Person'.
  
  // NG
  // john = {
  //   name: "John",
  //   age: "30",
  //   // >> Type 'string' is not assignable to type 'number'.
  // };
}

// インターフェイスとメソッドの定義
{
  interface Person {
    name: string;
    age: number;
    speak(word: string): void;
  }
  
  const alice: Person = {
    name: "Alice",
    age: 25,
    speak(word) {
      console.log(word);
    },
  };
  
  alice.speak("Wonderful!!");
}

// インターフェイスとオプショナルプロパティ
{
  interface Person {
    name: string;
    age?: number;
  }
  
  // ageプロパティを省略できる
  const bob: Person = {
    name: "Bob",
  };
}

// インターフェイスと読み取り専用プロパティ
{
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  
  const point: Point = { x: 10, y: 20 };
  
  // NG. xは読み取り専用なので再代入は許可されない
  // point.x = 30;
  // >> Cannot assign to 'x' because it is a read-only property.
}

// stringインデックスシグネチャを持つ型の使用例
{
  interface FruitStock {
    [i: string]: number;
  }
  
  const fruit: FruitStock = {};
  fruit.apple = 3;
  fruit.orange = 5;
  
  // fruit.banana = "many"; // Error
  // >> Type 'string' is not assignable to type 'number'.
}

// インデックスシグネチャと明示的なプロパティの混在
{
  interface FruitStock {
    peach: number; // 明示的なプロパティ
    [i: string]: number;
  }
  
  const fruit: FruitStock = { peach: 1 }; // 明示的なプロパティは必須
  fruit.apple = 3;
  fruit.orange = 5;
}

// キー名がテンプレート文字列パターンのインデックスシグネチャ
// インデックスシグネチャは、動的にプロパティ名が変わる可能性がある場合や、外部のデータソースを(APIの応答など)を扱う際に、プロパティ名が事前には定義されていないオブジェクトを型付けするのに適している
{
  interface Product {
    [key: `product_${number}`]: string;
  }
  
  // OK
  const productA: Product = {
    product_1: "foo",
    product_2: "bar",
    product_10: "baz",
  };
  
  // NG
  // const productB: Product = {
  //   product_1: "foo",
  //   product_2: "bar",
  //   product_dx: "baz", // Error
  // };
  
  // >> Object literal may only specify known properties, and 'product_dx' does not exist in type 'Product'.
}

// インターフェイスと呼び出しシグネチャ
{
  // 関数型による定義
  type CalcFunction = (n1: number, n2: number) => number;

  // インターフェイスによる定義
  interface CalcInterface {
    (n1: number, n2: number): number; // 呼び出しシグニチャ
  }

  const add: CalcFunction = (n1, n2) => n1 + n2;
  const subtract: CalcInterface = (n1, n2) => n1 - n2;
}

// インターフェイスの拡張
{
  // 拡張元となるインターフェイス
  interface Vehicle {
    speed: number;
  }

  // Car は Vehicle を拡張したインターフェイス
  interface Car extends Vehicle {
    engineType: string;
    volume: number;
  }

  // OK
  const superCar: Car = {
    speed: 240,
    engineType: "V8",
    volume: 4000,
  };

  // NG. 拡張元の Vehicle に存在するspeedプロパティが欠けているためエラー
  // const sportsCar: Car = {
  //   engineType: "V4",
  //   volume: 3000,
  // };
  // >> Property 'speed' is missing in type '{ engineType: string; volume: number; }' but required in type 'Car'.
}

// プロパティのオーバーライド
{
  interface Vehicle {
    speed: number;
    model: string | null;
  }
  
  interface Car extends Vehicle {
    engineType: string;
    model: string; // model プロパティをオーバーライド
  }  
}

// 複数のインターフェイスの拡張
{
  interface Born {
    birthYear: number;
    place: string;
  }
  
  interface Hobby {
    hobbies: string[];
  }
  
  // 複数のインターフェイスを拡張
  interface Person extends Born, Hobby {
    name: string;
  }
  
  const mike: Person = {
    name: "Mike",
    birthYear: 1995,
    place: "New York",
    hobbies: ["tennis", "cooking", "chess"],
  };  
}

// インターフェイスのマージ
// 使用する機会が限られる機能に思われるが、外部ライブラリを拡張する際には有用
{
  interface Car {
    engineType: string;
    volume: number;
  }
  
  // 2箇所で宣言したCarインターフェイスは自動的にマージされる
  interface Car {
    color: string;
  }
  
  // OK. 過剰プロパティチェックが働くがエラーにはならない。Carインターフェイスがマージされていることがわかる
  const myCar: Car = {
    engineType: "V6",
    volume: 3000,
    color: "red",
  };
  
  // NG. colorプロパティが欠けているためエラーになる。Carインターフェイスがマージされていることがわかる
  // const herCar: Car = {
  //   engineType: "V8",
  //   volume: 4000,
  // };
  // >> Property 'color' is missing in type '{ engineType: string; volume: number; }' but required in type 'Car'.
}

// インターフェイスと型エイリアスの違い
// オブジェクトの構造を定義する際にはインターフェイスが、複雑な型やユニオン型、インターセクション型などを扱う際には型エイリアスが使われることが一般的

// クラスの宣言
{
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
}

// プロパティの宣言の省略によるエラー
// TypeScriptでは、クラスのメンバーはトップレベルで明示的に宣言する必要がある
// この点はJavaScriptのクラスの挙動と異なる
{
  // class Person {
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //     // >> Property 'name' does not exist on type 'Person'.
  //     // >> Property 'age' does not exist on type 'Person'.
  //   }
  // }
}

// プロパティの初期化チェック
{
  // class Person {
  //   name: string;
  //   age: number;
  //   // >> Property 'age' has no initializer and is not definitely assigned in the constructor.
  
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //   }
  // }
}

// クラスのメソッドの追加
{
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(greeting: string): void {
      console.log(
        `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }  
}

// オプショナルプロパティと読み取り専用プロパティ
{
  class Person {
    readonly name: string; // 読み取り専用
    age: number;
    hobbies?: string[]; // オプショナル
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(greeting: string) {
      console.log(
        `${greeting}, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }
}

// 型としてのクラス
{
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  // 型としてクラスを使用
  let john: Person;
  john = new Person("John Doe", 25);
  
  // NG
  // john = "John Doe";
  // >> Type 'string' is not assignable to type 'Person'.
}

// オブジェクトの構造的型付け
// オブジェクトがクラスに定義されているすべてのプロパティを持っている限り、そのオブジェクトをクラス型の変数に代入することが許可される
{
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Personクラスを指定
  let john: Person;
  
  // 型チェックOK
  john = {
    name: "John Doe",
    age: 25,
  };
}

// インスタンスを代入したときの変数の型
{
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  // 変数 john の型は Person
  const john = new Person("John Doe", 25);
  
  // NG
  // john.gender = "male"; // Personクラスに存在しないプロパティにアクセスするとエラー
  // >> Property 'gender' does not exist on type 'Person'.
}

// クラスの継承
{
  class Parent {
    parentMethod() {
      // スーパークラスのメソッド
    }
  }
  
  // Parentクラスを継承
  class Child extends Parent {
    childMethod() {
      // サブクラスのメソッド
    }
  }
  
  const childObj = new Child();
  childObj.parentMethod(); // 継承したスーパークラスのメソッドを呼び出せる
  childObj.childMethod();  
}

// クラスの継承と型の互換性
{
  class Parent {
    parentMethod() {
      // スーパークラスのメソッド
    }
  }
  
  // Parentクラスを継承
  class Child extends Parent {
    childMethod() {
      // サブクラスのメソッド
    }
  }
  
  // スーパークラスの型が要求されているが、サブクラスのインスタンスを代入可能
  const objA: Parent = new Child();
  
  // NG
  // const objB: Child = new Parent();
  // >> Property 'childMethod' is missing in type 'Parent' but required in type 'Child'.
}

// クラスのプロパティのオーバーライド
{
  class SuperClass {
    prop: number = 10;
  }
  
  class SubClass extends SuperClass {
    prop: number = 20; // SuperClassのプロパティをオーバーライド.
  }  
}

// 型に互換性がないプロパティのオーバーライド
{
  class SuperClass {
    prop: number = 10;
  }
  
  // class SubClass extends SuperClass {
  //   prop: string = "20"; // SuperClassのプロパティをオーバーライド.
  // }
  // >> Property 'prop' in type 'SubClass' is not assignable to the same property in base type 'SuperClass'.
  // >> 　Type 'string' is not assignable to type 'number'.
}

// 型に互換性がないメソッドのオーバーライド
{
  class SuperClass {
    method(value: number): string {
      return `SuperClass method: ${value}`;
    }
  }
  
  // class SubClass extends SuperClass {
  //   method(value: string): string {
  //     return `SuperClass method: ${value}`;
  //   }
  // }
  // >> Property 'method' in type 'SubClass' is not assignable to the same property in base type 'SuperClass'.
  //  >> Type '(value: string) => string' is not assignable to type '(value: number) => string'.
  //   >> Types of parameters 'value' and 'value' are incompatible.
  //    >> Type 'number' is not assignable to type 'string'. 
}

// constructorのオーバーライド
{
  class Parent {
    constructor(name: string) {
      console.log(`Parent: ${name}`);
    }
  }
  
  class Child extends Parent {
    constructor(name: string, age: number) {
      super(name);
      console.log(`Child: name => ${name}, age => ${age}`);
    }
  }
  
  const child = new Child("Child", 10);
  // 実行結果
  // Parent: Child
  // Child: name => Child, age => 10  
}

// アクセス修飾子
// public
{
  class Person {
    public name: string; // 明示的にpublicと指定
    age: number; // デフォルトでpublic
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public greet() {
      console.log(
        // 内部でnameとageにアクセス
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
  }
  
  const john = new Person("John", 25);
  
  // クラスの外部からアクセス
  console.log(john.name); // John
  console.log(john.age); // 25
  john.greet(); // Hello, my name is John and I'm 25 years old.
}

// private
{
  class Person {
    name: string;
    private password: string;
  
    constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  
    public revealPassword() {
      // OK. クラスの内部からはアクセス可能
      console.log(`${this.name}'s password is: ${this.password}`);
    }
  }
  
  const jane = new Person("Jane", "12345");
  
  // NG. クラスの外部からはアクセスできない
  // console.log(jane.password);
  // >> Property 'password' is private and only accessible within class 'Person'.
  
  jane.revealPassword(); // Jane's password is: 12345
}

// protected
{
  class Person {
    name: string;
    protected saving: number;
  
    constructor(name: string, saving: number) {
      this.name = name;
      this.saving = saving;
    }
  }
  
  class Employee extends Person {
    private salary: number;
  
    constructor(name: string, saving: number, salary: number) {
      super(name, saving);
      this.salary = salary;
    }
  
    public introduce() {
      console.log(
        // サブクラスの内部ではsavingにアクセス可能
        `I'm ${this.name}. My salary is ${this.salary} and my saving is ${this.saving}`
      );
    }
  }
  
  const john = new Employee("John", 1000, 30);
  
  john.introduce();
  // I'm John. My salary is 30 and my saving is 1000.
  
  // NG. savingはprotectedなのでクラスの外部からはアクセスできない
  // console.log(john.saving);
  // >> Property 'saving' is protected and only accessible within class 'Person' and its subclasses.
}

// アクセス修飾子と省略記法
{
  // ①これまでの書き方
  // class Person {
  //   name: string;
  //   protected age: number;
  //   private address: string;

  //   constructor(name: string, age: number, address: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //   }

  //   introduce() {
  //     console.log(
  //       `I'm ${this.name} and ${this.age} years old. I live at ${this.address}`
  //     );
  //   }
  // }

  // ②省略記法
  class Person {
    constructor(
      // コンストラクタのパラメータにアクセス修飾子をつけることで、自動的にメンバー変数が宣言される
      public name: string,
      protected age: number,
      private address: string
    ) {}

    introduce() {
      console.log(
        `I'm ${this.name} and ${this.age} years old. I live at ${this.address}`
      );
    }
  }
}

// アクセサ（ゲッターとセッター）
// ゲッターやセッターを使用すると、プロパティへの直接のアクセスを制限したり、プロパティのアクセス時に特定の処理を行うことができる
{
  class Circle {
    private _radius: number;
  
    constructor(radius: number) {
      this._radius = radius;
    }
  
    // ゲッターの定義
    get radius(): number {
      console.log("半径を取得");
      return this._radius;
    }
  
    // セッターの定義
    set radius(value: number) {
      if (value <= 0) {
        throw new Error("不正な値です。0より大きい値を入力してください。");
      }
      console.log("半径を設定");
      this._radius = value;
    }
  }
  
  const circle = new Circle(3);
  
  // ゲッターの実行
  console.log(circle.radius);
  // ログ出力：
  // >> 半径を取得
  // >> 3
  
  // セッターの実行
  circle.radius = 5;
  // >> 半径を設定
  
  // NG. 負の値をセットしようとするとエラーが発生
  circle.radius = -1;
  // >> Error: 不正な値です。0より大きい値を入力してください。  
}

// staticプロパティ
{
  class Circle {
    static PI: number = 3.14;
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getArea(): number {
      // メソッドからstaticプロパティのアクセスは可能
      return Circle.PI * this.radius * this.radius;
    }
  }
  
  console.log(Circle.PI); // 3.14
  
  const circleA = new Circle(5);
  console.log(circleA.getArea()); // 78.5
  
  const circleB = new Circle(10);
  console.log(circleB.getArea()); // 314  
}

// 修飾子の組み合わせ
// アクセス修飾子、static、readonlyの順序で記述する
{
  class Combination {
    protected static readonly prop: string = "初期値";
  
    // 以下省略
  }  
}

// staticプロパティはあ、インスタンス化することなくプロパティにアクセスできるため、メモリの使用効率が良い
// すべてのインスタンスに影響を与える可能性があるため、使用する際には慎重に設計する必要がある

// 抽象クラスと抽象メソッド
// 抽象クラスは直接インスタンス化できない
{
  abstract class Animal {
    // 抽象メソッドは、具体的な実装を持たせてはいけない
    abstract makeSound(): void;
  
    move(): void {
      console.log("The animal is moving.");
    }
  }
}

// サブクラスでの抽象メソッドの実装
{
  abstract class Animal {
    // 抽象メソッドは、具体的な実装を持たせてはいけない
    abstract makeSound(): void;
  
    move(): void {
      console.log("The animal is moving.");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof woof!");
    }
  }  
}

// インターフェイスの実装
{
  interface Shape {
    getArea(): number;
  }
  
  // CircleクラスはShapeインターフェイスを実装する
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.getArea()); // 78.54 
}

// インターフェイスを正しく実装していない例
{
  interface Shape {
    getArea(): number;
  }
  
  // class Circle implements Shape {
  //   radius: number;
  
  //   constructor(radius: number) {
  //     this.radius = radius;
  //   }
  // }
  // >> Class 'Circle' incorrectly implements interface 'Shape'.
  //  >>  Property 'getArea' is missing in type 'Circle' but required in type 'Shape'.
}

// 異なるプリミティブ型同士の演算
// NumberAndStringのようなnumber型とstring型を同時に持つ要素の存在しないため、この型は空集合となる
// TypeScriptでは空集合はnever型として扱われ、定義上すべての集合の部分集合となる
{
  // ユニオン型
  type NumberOrString = number | string;

  // インターセクション型
  type NumberAndString = number & string; // never 型
}

// オブジェクト型と集合
// これらの例を通じて、オブジェクト型は、「特定のプロパティを持つ、という条件を満たす、すべてのオブジェクトの集合」ということがわかる
{
  // string型のnameプロパティを持つオブジェクト型を定義
  type Name = {
    name: string;
  };

  // 変数johnにName型を指定
  let john: Name;

  // ケース1
  const objA = { name: "John" };
  john = objA; // OK. nameプロパティが存在するため

  // ケース2
  const objB = {
    name: "John",
    gender: "male", // name以外のプロパティ
  };

  john = objB; // OK. name以外のプロパティが含まれていても代入可能。つまり、objBはName型の要素。

  // ケース3
  const objC = {
    // nameプロパティが含まれない
    fullName: "John Doe",
    age: 25,
  };

  // john = objC; // NG.
  // >> Property 'name' is missing in type '{ fullName: string; age: number; }' but required in type 'Name'.
}

// オブジェクト型同士のユニオン型の変数とオブジェクトの代入
{
  type Name = {
    name: string;
  };
  
  type Age = {
    age: number;
  };
  
  // ユニオン型を定義
  type NameOrAge = Name | Age;
  // { name: string} | { age: number }
  
  let john: NameOrAge;
  john = { name: "John" }; // OK
  john = { age: 25 }; // OK
}

// オブジェクト型同士のインターセクション型の変数とオブジェクトの代入
{
  type Name = {
    name: string;
  };
  
  type Age = {
    age: number;
  };
  
  // インターセクション型
  type NameAndAge = Name & Age;
  // { name: sting; age: number }
  
  let alice: NameAndAge;
  alice = { name: "Alice", age: 30 }; // OK
  // alice = { name: "Alice" }; // NG
  // >> Type '{ name: string; }' is not assignable to type 'NameAndAge'.
  //  >> Property 'age' is missing in type '{ name: string; }' but required in type 'Age'.
}

// サブタイプとスーパータイプの具体例1
{
  // 変数valは型推論によりstring型になる。
  let val = "10";

  // number|string型が求められる変数にstring型の変数を代入
  const age: number | string = val; // OK
}

// サブタイプとスーパータイプの具体例2
{
  type Name = {
    name: string;
  };
  
  // Name型のサブタイプ
  type NameAndAge = {
    name: string;
    age: number;
  };
  
  // nameだけを出力する関数
  function logName(person: Name) {
    console.log(person.name);
  }
  
  // nameとageを出力する関数
  function logNameAndAge(person: NameAndAge) {
    console.log(person.name, person.age);
  }
  
  const personOnlyName: Name = { name: "John" };
  const personNameAndAge: NameAndAge = { name: "John", age: 20 };
  
  // OK
  logName(personNameAndAge); // Name型を要求する関数に、NameAndAge型を渡す
  
  // NG
  // logNameAndAge(personOnlyName); // NameAndAge型を要求する関数に、Name型を渡す
  // >> Argument of type 'Name' is not assignable to parameter of type 'NameAndAge'.
  //  >> Property 'age' is missing in type 'Name' but required in type 'NameAndAge'.
}

// logName関数にNameAndAge型のオブジェクトを渡せるのは、NameAndAge型がName型のサブタイプだから
// logNameAndAge関数にName型のオブジェクトを渡すことはできない
// サブタイプとスーパータイプの関係は、部分集合と上位集合の関係に対応する
// すなわち、サブタイプに含まれるすべての値はスーパータイプの値として代わりに使用できる

// トップ型とボトム型
// TypeScriptの型システムにおいて、すべての型を包含する抽象的な型はunknown型。unknown型をすべての型のスーパータイプとして見ることで、その振る舞いを直感的に理解できる
// 逆にすべての型のサブタイプとなるのはnever型。空集合はすべての集合の部分集合であり、never型はこの空集合に相当する
// never型には実際には値が存在せず、どんな値もこの型の変数に代入することはできない
// このように、型システムでは、すべての型のを包含するunknown型をトップ型と呼び、すべての型に含まれるnever型をボトム型と呼ぶ

// 構造的型付け
// この挙動は、TypeScriptの型システムが型の名前ではなく、その構造（オブジェクトのメンバーの有無と型）に基づいて互換性を判断するため
{
  interface Person {
    name: string;
  }
  
  class Student {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  let person: Person;
  person = new Student("Jane");
}

// オブジェクト型の構造的部分型付け
{
  interface Person {
    name: string;
    age: number;
  }
  let person: Person;
  
  // ケース1
  let john = {
    name: "John",
    age: 30,
    gender: "male", // Personにはないプロパティが存在する
  };
  
  // OK。変数johnの各プロパティの型 <: Personの各プロパティ
  person = john;
  
  // ケース2
  let jane = {
    name: "Jane",
    age: "25", // string型はPersonのageの型のサブタイプではない
  };
  
  // NG
  // person = jane;
  // >> Type '{ name: string; age: string; }' is not assignable to type 'Person'.
  //  >> Types of property 'age' are incompatible.
  //   >> Type 'string' is not assignable to type 'number'.
  
  // ケース3
  let alice = {
    name: "Alice",
    // Personに存在するプロパティageが欠如している
  };
  
  // NG
  // person = alice;
  // >> Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.  
}

// 関数のパラメータがオブジェクト型の場合の構造的部分型付け
// この場合も「johnの各プロパティ <: Person型の各プロパティ」の関係を満たすため問題なく実行できる
{
  interface Person {
    name: string;
    age: number;
  }
  
  let john = { name: "John", age: 30, gender: "male" };
  
  function introduce(person: Person) {
    console.log(`Hello, I'm ${person.name}`);
  }
  
  introduce(john); // OK
}

// 構造的型付けとは対照的に、型の互換性を型に付与された名前に基づいて判断する名前的型付けというシステムも存在する
// この型システムはC++やJavaなどの言語で見られ、2つの型が同じ構造を持っていても、名前が異なる場合には異なる型として扱われる
// JavaScriptでは無名の関数式やオブジェクトリテラルが広く使われているため、名前的型付けよりも構造的型付けによる型の互換性判断がより適している

// 戻り値の型と関数型の互換性
{
  let fn1 = () => ({ name: "John" });
  // 関数型：() => { name: string; }

  let fn2 = () => ({ name: "John", age: 30 });
  // 関数型：() => { name: string; age: number; }

  // OK
  fn1 = fn2;
  // fn2の戻り値の型 <: fn1の戻り値の型 であるため、fn1にfn2が代入可能。

  // NG
  // fn2 = fn1;
  // >> Type '() => { name: string; }' is not assignable to type '() => { name: string; age: number; }'.
  //  >> Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
}

// パラメータの型と関数型の互換性
{
  interface Person {
    name: string;
    age: number;
  }
  
  // インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
  interface Student extends Person {
    club: string;
  }
  
  let fn3 = (person: Person) => {
    console.log(`That person's name is ${person.name} (${person.age}).`);
  };
  // fn3 は関数型: (person: Person) => void
  
  let fn4 = (student: Student) => {
    console.log(
      `That student's name is ${student.name} (${student.age}) and enjoys ${student.club}`
    );
  };
  // fn4 は関数型: (student: Student) => void
  
  // NG. パラメータの型に注目すると、Student型 <: Person型　なので条件を満たさない。
  // fn3 = fn4;
  
  // OK.
  fn4 = fn3;
  
  // fn4のパラメータの型はStudent型のため、Student型のオブジェクトを渡す必要がある。
  fn4({ name: "John", age: 30, club: "tennis" });
  // ログ：That person's name is John (30).  
}

// パラメータの数と関数型の互換性
{
  interface Person {
    name: string;
    age: number;
  }
  
  // インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
  interface Student extends Person {
    club: string;
  }
  
  let fn3 = (person: Person) => {
    console.log(`That person's name is ${person.name} (${person.age}).`);
  };
  
  // 新たに定義
  let fn5 = (person: Person, gender: string) => {
    console.log(
      `That person's name is ${person.name}(${person.age}, ${gender}).`
    );
  };
  // fn5 は関数型: (person: Person, gender: string) => void
  
  // NG. fn3のパラメータの数 < fn5のパラメータの数　なので条件を満たさない。
  // fn3 = fn5;
  
  // OK
  fn5 = fn3;
  
  //　fn5は関数型としてパラメータを2つ持つため、引数を2つ渡す必要がある。
  fn5({ name: "Jane", age: 25 }, "female");
  // ログ：That person's name is Jane (25).  
}

// 関数型の互換性
{
  interface Person {
    name: string;
    age: number;
  }
  
  // インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
  interface Student extends Person {
    club: string;
  }
  
  let fn3 = (person: Person) => {
    console.log(`That person's name is ${person.name} (${person.age}).`);
  };
  
  // 新たに定義
  let fn6 = (student: Student, gender: string) => {
    console.log(
      `That student's name is ${student.name}(${student.age},${gender}) and enjoys ${student.club}`
    );
  };
  // fn6 は関数型: (student: Student, gender: string) => void
  
  // OK
  fn6 = fn3;
  // 互換性の条件1：fn6のパラメータの型 <: fn3のパラメータの型
  // 互換性の条件2：fn3のパラメータの数 < fn6のパラメータの数
  
  fn6({ name: "Alice", age: 18, club: "chess" }, "female");
  // ログ：That person's name is Alice (18).  
}

// 関数Aと関数Bにおいて、次の条件が満たされる場合、関数Bは関数Aのサブタイプとなる
// 各パラメータにおいて、「Aのパラメータの型 <: Bのパラメータの型」
// Bのパラメータの数 <= Aのパラメータの数
// Bの戻り値の型 <: Aの戻り値の型

// 型の拡大
// TypeScriptは、letで宣言されたnumには、後続の処理で別の数値が再代入される可能性を想定して、リテラル型ではなく汎用的なnumber型に拡大して推論する
{
  let num = 5; // number型
  let greet = "Hello"; // string型
}

// constでの変数宣言と型推論
// constで宣言されたPIは具体的なリテラル3.14として型付けされる
{
  const PI = 3.14; // リテラル型（3.14）
}

// letで宣言された変数にリテラル型の変数を代入
{
  const PI = 3.14; // リテラル型（3.14）。constで宣言されているのでnumber型に拡大されない

  let num = PI; // number型に拡大
}

// 型注釈による型の拡大の防止
{
  // 型注釈で型を指定
  const PI: 3.14 = 3.14; // リテラル型（3.14）

  let num = PI; // リテラル型（3.14）。型が拡大されない。
}

// 配列の型の拡大
{
  const fruits = ["apple", "grape", "peach"]; // string[]

  const primitives = [1, "hello", true]; // (string | number | boolean)[]
}

// any型への拡大
{
  let x = null; // any型
  x = 123;
  x = "abc";

  // 暗黙的にundefinedで初期化
  let y; // any型
  y = 456;
  y = "xyz";

  // 空の配列で初期化
  let list = []; // any[]型
  list.push(1);
  list.push("Jane");
}

// any型と変数のスコープ
{
  function fn1() {
    let x; // any型
    x = 123;
    x = "abc";
    return x;
  }
  
  let x = fn1(); // string型
  // x = 1; // NG
  // Type 'number' is not assignable to type 'string'.
  
  function fn2() {
    let list = []; // any[]型
    list.push(1);
    list.push("Jane");
    return list;
  }
  
  const list = fn2(); // (string | number)[]
  // list.push(true); // NG
  // >> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.  
}

// 代入による絞り込み
{
  let x = Math.random() > 0.5 ? 1 : "Hello, TypeScript";
  // string | number 型

  // NG。xの型がnumber型の可能性があるため
  // x.toUpperCase();
  // >> Property 'toUpperCase' does not exist on type 'string | number'.
  //  >> Property 'toUpperCase' does not exist on type 'number'.

  // 代入する値の型からxの型を絞り込む
  x = "narrowing"; // string 型

  // OK。string型に絞り込まれているため
  x.toUpperCase();

  // 代入する値の型からxの型を絞り込む
  x = 123;

  // OK。number型に絞り込まれているため
  x.toFixed();
}

// 等価演算子による絞り込み
{
  // ケース1
  let x = Math.random() > 0.5 ? 1 : "Hello";
  // string | number 型

  if (x === "Hello") {
    // OK。このブロック内では、xは"Hello"型として扱われる
    x.toUpperCase();
  }

  // NG
  // x.toUpperCase();

  // ケース2
  function fn(strOrNum: string | number, strOrBool: string | boolean) {
    // この条件が真になるのは、どちらもstring型の場合のみ
    if (strOrNum === strOrBool) {
      // このブロック内では、どちらの変数もstring型として扱われる
      strOrNum.toUpperCase();
      strOrBool.toUpperCase();
    } else {
      console.log(strOrNum); // string | number 型
      console.log(strOrBool); // string | boolean 型
    }
  }
}

// typeofによる絞り込み
{
  function printValue(value: string | number) {
    if (typeof value === "string") {
      // valueはstring型として扱われる。
      console.log(value.toUpperCase());
    } else {
      // valueは必然的にnumber型として扱われる
      console.log(value.toFixed(2));
    }
  }
}

// inによる絞り込み
{
  interface Rectangle {
    width: number;
    height: number;
  }
  
  interface Circle {
    radius: number;
  }
  
  function printArea(shape: Rectangle | Circle) {
    if ("width" in shape) {
      // shapeはRectangle型として扱われる
      console.log(`Area: ${shape.width * shape.height}`);
    } else {
      // shapeはCircle型として扱われる
      console.log(`Radius: ${shape.radius ** 2 * 3.14}`);
    }
  }
}

// instanceofによる絞り込み
{
  class Fish {
    swim() {
      console.log("The fish is swimming.");
    }
  }
  
  class Bird {
    fly() {
      console.log("The bird is flying.");
    }
  }
  
  function move(animal: Fish | Bird) {
    if (animal instanceof Fish) {
      // animalはFish型として扱われる
      animal.swim();
    } else {
      // animalはBird型として扱われる
      animal.fly();
    }
  }
}

// タグ付きユニオン型のタグによる絞り込み
// in演算子がプロパティの「存在」に基づいて型を絞り込むのに対し、タグ付きユニオン型は特定のプロパティの「値」に基づいて型を絞り込むため、より直接的で明確な型の識別を実現する
{
  interface Rectangle {
    type: "rectangle"; // タグ(識別子)
    width: number;
    height: number;
  }
  
  interface Circle {
    type: "circle"; // タグ
    radius: number;
  }
  
  interface Square {
    type: "square"; // タグ
    width: number;
  }
  
  // ユニオン型の定義
  type Shape = Rectangle | Circle | Square;
  
  function printArea(shape: Shape) {
    switch (shape.type) {
      case "rectangle":
        console.log(`Area: ${shape.width * shape.height}`);
        break;
      case "circle":
        console.log(`Area: ${shape.radius ** 2 * 3.14}`);
        break;
      case "square":
        console.log(`Area: ${shape.width ** 2}`);
        break;
    }
  }
}

// satisfiesキーワード
// 変数colorの型推論を維持したまま、Color型との一致を検証できる
// TypeScriptの強力な型推論を最大限活用するためのにも、型注釈は必要最低限に留め、下記のようなケースではsatisfiesキーワードを使用する
{
  type RGB = [red: number, green: number, blue: number]; // ラベル付きTuple型

  interface Color {
    red: RGB | string;
    green: RGB | string;
    blue: RGB | string;
  }

  const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255],
  } satisfies Color; // satisfiesキーワードによる型の指定

  // OK
  const greenNormalized = color.green.toUpperCase();

  // NG
  // const typoColor = {
  //   red: [255, 0, 0],
  //   green: "#00ff00",
  //   bleu: [0, 0, 255], // Error
  // } satisfies Color;

  // >> Object literal may only specify known properties, and 'bleu' does not exist in type 'Color'.
}

// 引数の型をチェックするための関数
// isString関数の結果を用いれば、型が絞れそうだがうまくいかない
// なぜならTypeScriptが理解しているのは、isStringの戻り値がboolean型である、ということだけでisStringで絞り込まれた型情報はスコープの外に出ると失われてしまうから
{
  function isString(value: unknown): boolean {
    return typeof value === "string";
  }
  
  function printValue(inputVal: number | string) {
    if (isString(inputVal)) {
      // NG。inputValがstring型に絞り込めていない。
      // console.log(inputVal.toUpperCase());
      // >> Property 'toUpperCase' does not exist on type 'string | number'.
    } else {
      // NG
      // console.log(inputVal.toFixed(2));
      // >> Property 'toFixed' does not exist on type 'string | number'.
    }
  }
}

// ユーザー定義型ガード
// 関数の戻り値として「:パラメータ名 is 型名」という型述語を指定して定義する
// この関数が真を返した場合に、そのパラメータが、型述語をで指定した型であることをTypeScriptの型チェッカーに伝える
{
  // 引数がstring型かをチェックするユーザー定義型ガード
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  function printValue(inputVal: number | string) {
    if (isString(inputVal)) {
      // ユーザー定義型ガードによって、inputValはこのブロック内ではstring型として扱われる。
      console.log(inputVal.toUpperCase());
    } else {
      console.log(inputVal.toFixed(2));
    }
  }
}

// 型アサーションの構文
// 型アサーションは、サブタイプとスーパータイプの関係にある型の間でしか使用できない
{
  let input: unknown;

  // 何らかの処理
  // ...

  // 変数inputの型をstring型にアサーション
  let text: string;
  text = input as string;
}

// DOM要素と型アサーション
{
  // TypeScriptはDOM APIの種類から戻り値の型をある程度推論するが、具体的なHTML要素までは絞り込めない
  const someElementA = document.querySelector(".someClass");
  // Element | null 型

  // 型アサーションによる型の変更。開発者が具体的なHTML要素を知っている場合
  const someElementB = document.querySelector(".someClass") as HTMLInputElement;
  // HTMLInputElement 型

  console.log("someElementB:", someElementB.value);
}

// 非nullアサーション
// 開発者がコードの該当する部分で変数が決してnullやundifinedにならないと確信している場合に、その情報をTypeSriptに伝えるための構文
// data!による非nullアサーションを用いることで、data変数がnullでないと断言している
// この表明により、processedDataの型をstringとして扱える
{
  function fetchData(): string | null {
    return Math.random() ? "text" : null;
  }
  
  let data: string | null = fetchData();
  
  // 非 null アサーションを使用して、dataがnullではないことを保証する
  const processedData: string = data!;
}

// constアサーションの構文
// obj内の各プロパティは読み取り専用となり、またプロパティの値はリテラル型として固定される
{
  let obj = {
    x: 10,
    y: "hello",
  } as const;
  
  // constアサーションで変更後の型
  // {
  //  readonly x: 10;
  //  readonly y: "hello";
  // }
}

// 配列とconstアサーション
{
  let arr = [1, 2, 3] as const; // readonly [1,2,3] 型
}

// keyof演算子
// 指定されたオブジェクト型からそのプロパティキーのリテラル型を抽出し、それらを結合したユニオン型を生成する際に使用される
{
  interface Person {
    name: string;
    age: number;
    hobbies: string[];
  }
  
  type PersonKeys = keyof Person;
  // "name" | "age" | "hobbies" 型  
}

// keyof演算子の利用例
// keyof演算子は型レベルでの操作に使用され、変数の「型」に対して適用されるため、直接的に変数に使用できない
{
  interface Person {
    name: string;
    age: number;
    hobbies: string[];
  }
  
  // パラメータkeyの型にkeyof演算子を使用
  function getProperty(obj: Person, key: keyof Person) {
    return obj[key];
  }
  
  const person: Person = {
    name: "John",
    age: 30,
    hobbies: ["tennis", "cooking"],
  };
  
  console.log(getProperty(person, "name")); // "John"  
}

// typeof演算子による型の取得
// JavaScriptのtypeof演算子は対象の値のデータ型を「文字列」で返す演算子だが、TypeScriptのtypeof演算子は、対象の変数や式の「型情報」を返す
{
  const person = {
    name: "John",
    age: 30,
    hobbies: ["tennis", "cooking"],
  };
  
  // 既存の変数から型を取得して、パラメータの型として指定
  function greet(p: typeof person) {
    console.log(`My name is ${p.name}!`);
  }
  
  // パラメータ p の型
  // {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  // }
  
  // NG
  // greet({ name: "Alice", age: 22 });
  // >> Argument of type '{ name: string; age: number; }' is not assignable to parameter of type '{ name: string; age: number; hobbies: string[]; }'.
  //  >> Property 'hobbies' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; hobbies: string[]; }'.
}

// keyofとtypeof演算子の組み合わせ
{
  const employee = {
    id: "e001",
    name: "Alice",
    department: "Engineering",
  };
  
  // keyofとtypeofを組み合わせると、明示的な型情報がなくても変数から直接キー情報を抽出できる
  function getEmployeeDetail(key: keyof typeof employee) {
    return employee[key];
  }
  
  // keyof typeof employee の型
  // '"name" | "id" | "department"
  
  console.log(getEmployeeDetail("name")); //"Alice"
  
  // NG
  // console.log(getEmployeeDetail("age"));
  // >> Argument of type '"age"' is not assignable to parameter of type '"id" | "name" | "department"'.
}
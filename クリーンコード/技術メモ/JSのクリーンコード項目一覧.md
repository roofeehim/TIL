以下、それぞれのルールに対する理由をコード例の下に記載します。

---

### 変更されない定数はアッパースネークケースで書く

```javascript
const MAX_RETRIES = 5;
```

**理由**: 定数は変更されないことが明確で、他の変数と区別がつきやすくなるため、アッパースネークケースを使用します。

---

### 長い条件は変数に代入する

```javascript
const isEligible = user.isActive && user.age > 18 && user.hasPermission;
if (isEligible) {
  // 処理
}
```

**理由**: 複雑な条件式を変数に代入することで、コードの可読性が向上し、条件が何を意味しているのかが一目でわかるようになります。

---

### 参照透過性を保った関数を作る

```javascript
function add(x, y) {
  return x + y; // 副作用がない
}
```

**理由**: 関数が参照透過性を持つと、同じ入力に対して常に同じ出力を返すため、予測可能な動作を保証しやすくなり、テストやデバッグが簡単になります。

---

### レキシカルスコープは使わない

```javascript
function calculateTotal(price, taxRate) {
  return price * taxRate;
}
```

**理由**: レキシカルスコープを避けることで、関数外の状態に依存しない、よりモジュール化された、再利用可能な関数が作れるため、バグの原因となる暗黙の依存関係を減らせます。

---

### 一つの関数には一つの処理を意識する

```javascript
function fetchData() {
  // データの取得のみを行う
  return api.getData();
}
```

**理由**: 単一責任の原則に従うことで、関数がシンプルになり、テストやメンテナンスが容易になります。

---

### 関数は小さく作る

```javascript
function calculateTax(price) {
  return price * 0.1;
}

function applyDiscount(price, discount) {
  return price - discount;
}
```

**理由**: 関数を小さく保つことで、コードの可読性が向上し、特定の問題を簡単に切り分けて修正できるようになります。また、再利用性も高まります。

---

### 配列の添字へのアクセスには分割代入を使う

```javascript
const [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20
```

**理由**: 分割代入を使うことで、可読性が向上し、意図が明確になります。また、エラーが発生しにくくなります。

---

### 変数の寿命を短くする

```javascript
function processData(data) {
  const result = data.map(item => item * 2);
  return result;
}
```

**理由**: 変数のスコープを狭めることで、バグのリスクを低減し、不要なメモリ使用を抑えることができます。

---

### グローバルスコープは使わない

```javascript
function doSomething() {
  const localValue = 42;
  // 処理
}
```

**理由**: グローバルスコープを使わないことで、予期せぬ変数の上書きを防ぎ、コードのモジュール性と安全性を高めることができます。

---

### DRYを適用すべきか判断して関数を作る

```javascript
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
```

**理由**: 重複したコードを減らすことで、修正箇所が少なくなり、保守性が向上します。ただし、あまりに共通化しすぎるとコードが複雑化するため、適用の判断が重要です。

---

### 引数が多い場合はオブジェクトにまとめる

```javascript
function createUser({ name, age, email }) {
  return { name, age, email };
}

const user = createUser({ name: 'Alice', age: 30, email: 'alice@example.com' });
```

**理由**: 引数が多い場合にオブジェクトにまとめることで、関数の可読性が向上し、引数の順番に依存しない柔軟なコードになります。

---

### 関数は使用順に上から下に書く

```javascript
function main() {
  const result = add(5, 10);
  console.log(result);
}

function add(a, b) {
  return a + b;
}

main();
```

**理由**: 使用する順に関数を配置することで、コードを読んだ時に自然な流れを感じることができ、理解しやすくなります。

---

### 引数で渡ってきたオブジェクトの中身は書き換えない

```javascript
function displayUser(user) {
  console.log(`User name: ${user.name}`);
  // user.name = 'Changed'; // これはしない
}
```

**理由**: 引数のオブジェクトを不意に書き換えると、予期しない動作やバグが発生する可能性があるため、純粋な関数として振る舞わせるべきです。

---

### 同じループ内で複数のことはしない

```javascript
data.forEach(item => {
  processItem(item);
  // ここで他の処理を追加しない
});
```

**理由**: 一つのループ内で複数のことを行うと、コードの複雑性が増し、バグの発生率が上がります。ループは一つの目的に集中させるべきです。

---

### 早期returnでネストを解消する

```javascript
function checkAge(age) {
  if (age < 18) return 'Underage';
  
  // その他の処理
}
```

**理由**: 早期にreturnすることで、ネストが深くならず、コードの可読性が向上します。条件が複雑な場合は特に有効です。

---

### if文よりコールバック関数を使う

```javascript
const data = [1, 2, 3, 4];
const filteredData = data.filter(item => item > 2);
```

**理由**: コールバック関数を使うことで、意図を明確にし、処理を短くシンプルに記述できます。また、抽象化のレベルが上がり、コードの再利用性も向上します。

---

### 関数の中でif文が複数ある場合は、分割できるサイン

```javascript
function processOrder(order) {
  if (!isValid(order)) return 'Invalid order';
  if (!isInStock(order)) return 'Out of stock';
  
  // その他の処理
}
```

**理由**: if文が複数ある場合、関数が複雑化しているサインです。責務を分割して、シンプルで分かりやすい関数に分けることで、コードの可読性が高まります。

---

### クラスはなるべく小さく作る

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}
```

**理由**: クラスが小さければ、小さいほどそれぞれのクラスの責任が明確になり、テストやメンテナンスがしやすくなります。責務が複数にまたがるクラスは複雑化しやすいです。

---

### 異なるスコープで同じ変数を使わない

```javascript
function outerFunction() {
  const data = 'outer data';
  function innerFunction() {
    const data = 'inner data'; // 別の変数名を使う
  }
}
```

**理由**: 異なるスコープで同じ名前の変数を使うと、意図しない混乱や予期しないバグが発生する可能性があるため、スコープごとに異なる変数名を使用し、明確にすべきです。
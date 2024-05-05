JavaScriptの「strict mode」（厳格モード）では、関数内での`this`の挙動が通常モードと異なります。具体的には、strict modeが有効な場合、通常の関数で`this`を指定しないと`undefined`になります。これは、グローバルオブジェクト（ブラウザでは`window`、Node.jsでは`global`）を指す通常の動作からの変更です。

アロー関数の場合、strict modeに関わらず、アロー関数自体は独自の`this`を持ちません。アロー関数内の`this`は、アロー関数を囲む（外側の）最も近い通常の関数の`this`の値を「捕捉」します。これは「lexical scoping」（レキシカルスコープ）と呼ばれるもので、アロー関数の`this`はコードが書かれた場所によって静的に決まるということです。

例えば、次のようなケースを考えてみましょう：

```javascript
"use strict";

function myFunction() {
  return () => {
    return this;
  };
}

const obj = {
  method: myFunction
};

const arrowFunc = obj.method();
console.log(arrowFunc());  // `this`はobjを指す
```

この例では、`obj.method()`を実行すると、`myFunction`が`obj`のコンテキストで呼び出されます。そのため、`myFunction`内で作成されるアロー関数は、`myFunction`が呼び出された時の`this`（ここでは`obj`）を捕捉します。結果として、アロー関数から返される`this`は`obj`を指します。

逆に、次のような場合を考えます：

```javascript
"use strict";

const arrowFunc = (() => {
  return this;
})();

console.log(arrowFunc);  // `this`は`undefined`
```

ここでは、アロー関数はグローバルスコープで宣言されていますが、`strict mode`のため`this`は`undefined`となります。これはアロー関数が外部スコープ（この場合はグローバルスコープ）の`this`を捕捉するためで、strict modeのグローバルスコープでは`this`が`undefined`になります。

このように、アロー関数の`this`はその宣言された場所のスコープに依存し、strict modeかどうかによってその挙動が変わることがあります。
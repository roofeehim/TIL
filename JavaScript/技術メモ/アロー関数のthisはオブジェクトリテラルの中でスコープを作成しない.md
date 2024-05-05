JavaScriptのアロー関数における`this`は、アロー関数が定義された時点での`this`を参照します。アロー関数は、それが定義された外側のスコープの`this`を「覚えて」います。

JavaScriptのオブジェクトリテラル（`{}`で定義されるオブジェクト）は`this`の新しいスコープを作成しないのがポイントです。したがって、オブジェクトリテラルの中でアロー関数を定義した場合、そのアロー関数の`this`はオブジェクトリテラルを囲んでいる外側のスコープの`this`を参照します。

以下の例を見てみましょう。

```jsx
let value = 'Hello from global';

let obj = {
  value: 'Hello from object',
  printValue: () => {
    console.log(this.value);
  }
};

obj.printValue(); // 'Hello from global'

```

この例では、アロー関数`printValue`は`obj`オブジェクトの中に定義されていますが、`this`は`obj`オブジェクトを指さないというのがポイントです。なぜなら、オブジェクトリテラルは`this`の新しいスコープを作成しないからです。そのため、`printValue`の`this`は外側のスコープ（この場合、グローバルスコープ）の`this`を「覚えて」います。その結果、`obj.printValue()`を実行すると、「Hello from global」が表示されます。

この特性は、時と場合により便利な場合もありますが、直感に反する結果をもたらすこともあるため、理解して使いこなすことが重要です。
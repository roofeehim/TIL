ステータスコードが何であれ、`fetch`が成功した場合（ネットワークエラーなどが発生しない場合）、JavaScriptの`catch`ブロックには行きません。`catch`ブロックは基本的にネットワークエラーやコード内の他の例外に対してのみトリガーされます。

HTTPステータスコードが200番台でない場合でも、`fetch`は通常成功として扱われるため、これをキャッチして特定の処理を行うためには、手動でエラーをスローするか、`handleError`関数などを作成して使用する必要があります。

以下に、ステータスコードが何であれ、`catch`ブロックに行かないことを確認するための具体例を示します。

### `handleError`関数と`fetch`の例

```javascript
function handleError(response) {
    switch(response.status) {
        case 400:
            console.error('Bad Request:', response.statusText);
            break;
        case 401:
            console.error('Unauthorized:', response.statusText);
            break;
        case 404:
            console.error('Not Found:', response.statusText);
            break;
        case 500:
            console.error('Internal Server Error:', response.statusText);
            break;
        default:
            console.error('Unexpected error:', response.statusText);
    }
}

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        if (!response.ok) { // ステータスコードが200番台でない場合
            handleError(response);
            return; // エラーが発生した場合、処理を中断する
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error); // ネットワークエラーやその他の例外をキャッチ
    }
}

fetchData();
```

### 説明

1. **`fetch`が成功した場合**：
   - ステータスコードが200番台でない場合でも、`fetch`は成功とみなされ、`catch`ブロックには行きません。
   - レスポンスが200番台でない場合は、`response.ok`が`false`となり、手動でエラーハンドリングを行う必要があります（例：`handleError`関数の呼び出し）。

2. **`catch`ブロックに行く条件**：
   - ネットワークエラー（例：インターネット接続が失われた場合やサーバーがダウンしている場合）。
   - JavaScriptコード内で発生した他の例外（例：`await fetch()`が失敗した場合）。

### 実装のポイント

- **手動でエラーハンドリング**：`response.ok`をチェックし、必要に応じてエラーハンドリングを行う。
- **`catch`ブロック**：ネットワークエラーや予期しない例外をキャッチし、適切に処理する。

このようにすることで、HTTPステータスコードに基づいたエラーハンドリングを適切に行いつつ、ネットワークエラーなどの例外に対しても対応することができます。
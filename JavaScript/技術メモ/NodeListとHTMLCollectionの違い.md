Web開発において、NodeListとHTMLCollectionという2つのオブジェクトがあります。これらは、HTMLドキュメント内の要素にアクセスするために使用されます。しかし、これら2つのオブジェクトには、静的と動的な違いがあります。

## NodeList

NodeListは、HTMLドキュメント内の要素のリストを表します。このリストは、静的なものであり、ドキュメント内の要素が変更されても更新されません。NodeListを作成する方法は、次のようになります。

```jsx
const nodeList = document.querySelectorAll('selector');

```

ここで、`selector`は、要素を見つけるためのCSSセレクターです。NodeListには、配列と同じように、要素のインデックス番号があります。NodeListは、foreachループを使用して、要素にアクセスすることができます。

```jsx
nodeList.forEach(element => {
  // do something with the element
});

```

## HTMLCollection

HTMLCollectionは、NodeListと同様に、HTMLドキュメント内の要素のリストを表します。しかし、HTMLCollectionは動的なリストであり、ドキュメント内の要素が変更されると自動的に更新されます。HTMLCollectionを作成する方法は、次のようになります。

```jsx
const htmlCollection = document.getElementsByTagName('tagname');

```

ここで、`tagname`は、要素のタグ名です。HTMLCollectionは、NodeListと同じように、要素のインデックス番号を持っています。HTMLCollectionは、forループを使用して、要素にアクセスすることができます。

```jsx
for (let i = 0; i < htmlCollection.length; i++) {
  const element = htmlCollection[i];
  // do something with the element
}

```

## まとめ

NodeListとHTMLCollectionは、両方ともHTMLドキュメント内の要素にアクセスするために使用されます。しかし、NodeListは静的であり、HTMLCollectionは動的であるため、目的によって適切な方法を選択する必要があります。
### 『ルールズ・オブ・プログラミング』

#### 1. 単純さ
シンプルなコードは理解しやすく、バグが少ない。複雑さを避けるために、新しい概念やコードの行数を減らすことが重要です [oai_citation:1,Don't Repeat Yourself](https://blog-dry.com/#:~:text=%E8%91%97%E8%80%85%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AB%E3%81%AF3%E3%81%A4%E3%81%AE%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8B%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E8%BF%B0%E3%81%B9%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E5%9F%BA%E6%BA%96%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E9%80%86%E3%81%AB%E3%81%84%E3%81%86%E3%81%A8%E3%80%812%E3%81%A4%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8F%E7%A8%8B%E5%BA%A6%E3%81%A7%E3%81%AF%E4%B8%80%E8%88%AC%E5%8C%96%E3%82%92%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%AF%E3%81%AA%E3%81%8F%E3%80%812%E3%81%A4%E3%81%AE%E4%BE%8B%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E9%96%A2%E6%95%B0%E3%81%AA%E3%82%8A%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8C%E3%81%B0%E3%81%9D%E3%82%8C%E3%81%A7%E6%B8%88%E3%82%80%E3%81%AE%E3%81%A0%E3%80%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%0A%0A%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AF%E3%81%9F%E3%81%97%E3%81%8B%E3%81%AB%E6%95%B0%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%93%E3%82%8C%E3%81%B0%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AF%E5%A4%9A%E5%B0%91%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E6%AD%A3%E7%9B%B4%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AB%E7%9B%B4%E9%9D%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AE%E4%BB%95%E6%96%B9%E3%81%8C%E3%81%8D%E3%82%8C%E3%81%84%E3%81%A7%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB%E3%80%81%E5%88%A5%E3%81%AE%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E8%A1%8C%E3%81%86%E3%81%A8%E8%BF%BD%E5%8A%A0%E3%81%A7%E3%81%95%E3%82%89%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%82%8C%E3%81%AB%E3%82%88%E3%82%8A%E6%9C%AC%E6%9D%A5%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%A7%E4%BA%AB%E5%8F%97%E3%81%97%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AF%E3%81%9A%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95%E3%82%88%E3%82%8A%E3%80%81%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%81%AB%E3%81%8F%E3%81%95%E3%81%AE%E6%96%B9%E3%81%8C%E7%9B%AE%E7%AB%8B%E3%81%A4%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AF%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%99%E3%82%8B%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%AE%E6%95%B0%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%9A%E3%80%81%E8%80%83%E5%AF%9F%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0A%0A,jp%E3%80%91%E3%81%AF%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA%E8%A7%A3%E6%B3%95%E3%81%A7) [oai_citation:2,Marginalia](https://blog.lacolaco.net/) [oai_citation:3,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:4,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 複雑なコードの例
function complexFunction(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

// シンプルなコードの例
function simpleFunction(a, b) {
  return Math.abs(a - b);
}
```

#### 2. 一般化には3つの例が必要
一般化は少なくとも3つのユースケースがある場合にのみ行うべきです。これにより、不必要な複雑さを排除し、将来的な修正が容易になります [oai_citation:5,Don't Repeat Yourself](https://blog-dry.com/#:~:text=%E8%91%97%E8%80%85%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AB%E3%81%AF3%E3%81%A4%E3%81%AE%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8B%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E8%BF%B0%E3%81%B9%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E5%9F%BA%E6%BA%96%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E9%80%86%E3%81%AB%E3%81%84%E3%81%86%E3%81%A8%E3%80%812%E3%81%A4%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8F%E7%A8%8B%E5%BA%A6%E3%81%A7%E3%81%AF%E4%B8%80%E8%88%AC%E5%8C%96%E3%82%92%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%AF%E3%81%AA%E3%81%8F%E3%80%812%E3%81%A4%E3%81%AE%E4%BE%8B%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E9%96%A2%E6%95%B0%E3%81%AA%E3%82%8A%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8C%E3%81%B0%E3%81%9D%E3%82%8C%E3%81%A7%E6%B8%88%E3%82%80%E3%81%AE%E3%81%A0%E3%80%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%0A%0A%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AF%E3%81%9F%E3%81%97%E3%81%8B%E3%81%AB%E6%95%B0%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%93%E3%82%8C%E3%81%B0%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AF%E5%A4%9A%E5%B0%91%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E6%AD%A3%E7%9B%B4%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AB%E7%9B%B4%E9%9D%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AE%E4%BB%95%E6%96%B9%E3%81%8C%E3%81%8D%E3%82%8C%E3%81%84%E3%81%A7%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB%E3%80%81%E5%88%A5%E3%81%AE%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E8%A1%8C%E3%81%86%E3%81%A8%E8%BF%BD%E5%8A%A0%E3%81%A7%E3%81%95%E3%82%89%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%82%8C%E3%81%AB%E3%82%88%E3%82%8A%E6%9C%AC%E6%9D%A5%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%A7%E4%BA%AB%E5%8F%97%E3%81%97%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AF%E3%81%9A%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95%E3%82%88%E3%82%8A%E3%80%81%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%81%AB%E3%81%8F%E3%81%95%E3%81%AE%E6%96%B9%E3%81%8C%E7%9B%AE%E7%AB%8B%E3%81%A4%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AF%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%99%E3%82%8B%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%AE%E6%95%B0%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%9A%E3%80%81%E8%80%83%E5%AF%9F%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0A%0A,jp%E3%80%91%E3%81%AF%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA%E8%A7%A3%E6%B3%95%E3%81%A7) [oai_citation:6,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:7,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 一般化が不必要な場合
function handleCase1() { /* 具体的な処理 */ }
function handleCase2() { /* 具体的な処理 */ }

// 一般化が必要な場合
function handleCases(caseType) {
  switch (caseType) {
    case 'case1':
      // 具体的な処理
      break;
    case 'case2':
      // 具体的な処理
      break;
    case 'case3':
      // 具体的な処理
      break;
  }
}
```

#### 3. 最適化するな
最適化よりもシンプルさを優先します。シンプルなコードは後で最適化しやすく、初期段階では最適化を考えずに済みます [oai_citation:8,Don't Repeat Yourself](https://blog-dry.com/#:~:text=%E8%91%97%E8%80%85%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AB%E3%81%AF3%E3%81%A4%E3%81%AE%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8B%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E8%BF%B0%E3%81%B9%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E5%9F%BA%E6%BA%96%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E9%80%86%E3%81%AB%E3%81%84%E3%81%86%E3%81%A8%E3%80%812%E3%81%A4%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8F%E7%A8%8B%E5%BA%A6%E3%81%A7%E3%81%AF%E4%B8%80%E8%88%AC%E5%8C%96%E3%82%92%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%AF%E3%81%AA%E3%81%8F%E3%80%812%E3%81%A4%E3%81%AE%E4%BE%8B%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E9%96%A2%E6%95%B0%E3%81%AA%E3%82%8A%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8C%E3%81%B0%E3%81%9D%E3%82%8C%E3%81%A7%E6%B8%88%E3%82%80%E3%81%AE%E3%81%A0%E3%80%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%0A%0A%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AF%E3%81%9F%E3%81%97%E3%81%8B%E3%81%AB%E6%95%B0%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%93%E3%82%8C%E3%81%B0%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AF%E5%A4%9A%E5%B0%91%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E6%AD%A3%E7%9B%B4%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AB%E7%9B%B4%E9%9D%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AE%E4%BB%95%E6%96%B9%E3%81%8C%E3%81%8D%E3%82%8C%E3%81%84%E3%81%A7%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB%E3%80%81%E5%88%A5%E3%81%AE%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E8%A1%8C%E3%81%86%E3%81%A8%E8%BF%BD%E5%8A%A0%E3%81%A7%E3%81%95%E3%82%89%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%82%8C%E3%81%AB%E3%82%88%E3%82%8A%E6%9C%AC%E6%9D%A5%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%A7%E4%BA%AB%E5%8F%97%E3%81%97%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AF%E3%81%9A%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95%E3%82%88%E3%82%8A%E3%80%81%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%81%AB%E3%81%8F%E3%81%95%E3%81%AE%E6%96%B9%E3%81%8C%E7%9B%AE%E7%AB%8B%E3%81%A4%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AF%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%99%E3%82%8B%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%AE%E6%95%B0%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%9A%E3%80%81%E8%80%83%E5%AF%9F%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0A%0A,jp%E3%80%91%E3%81%AF%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA%E8%A7%A3%E6%B3%95%E3%81%A7) [oai_citation:9,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:10,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 複雑な最適化されたコード
function optimizedFunction(arr) {
  return arr.filter(x => x % 2 === 0).map(x => x * 2);
}

// シンプルなコード
function simpleFunction(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * 2);
    }
  }
  return result;
}
```

#### 4. コードレビュー
コードレビューはバグの発見だけでなく、チーム全体の知識共有を目的としています。シニアとジュニアの組み合わせで行うことが推奨されます [oai_citation:11,Don't Repeat Yourself](https://blog-dry.com/#:~:text=%E8%91%97%E8%80%85%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AB%E3%81%AF3%E3%81%A4%E3%81%AE%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8B%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E8%BF%B0%E3%81%B9%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E5%9F%BA%E6%BA%96%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E9%80%86%E3%81%AB%E3%81%84%E3%81%86%E3%81%A8%E3%80%812%E3%81%A4%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8F%E7%A8%8B%E5%BA%A6%E3%81%A7%E3%81%AF%E4%B8%80%E8%88%AC%E5%8C%96%E3%82%92%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%AF%E3%81%AA%E3%81%8F%E3%80%812%E3%81%A4%E3%81%AE%E4%BE%8B%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E9%96%A2%E6%95%B0%E3%81%AA%E3%82%8A%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8C%E3%81%B0%E3%81%9D%E3%82%8C%E3%81%A7%E6%B8%88%E3%82%80%E3%81%AE%E3%81%A0%E3%80%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%0A%0A%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AF%E3%81%9F%E3%81%97%E3%81%8B%E3%81%AB%E6%95%B0%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%93%E3%82%8C%E3%81%B0%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AF%E5%A4%9A%E5%B0%91%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E6%AD%A3%E7%9B%B4%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AB%E7%9B%B4%E9%9D%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AE%E4%BB%95%E6%96%B9%E3%81%8C%E3%81%8D%E3%82%8C%E3%81%84%E3%81%A7%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB%E3%80%81%E5%88%A5%E3%81%AE%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E8%A1%8C%E3%81%86%E3%81%A8%E8%BF%BD%E5%8A%A0%E3%81%A7%E3%81%95%E3%82%89%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%82%8C%E3%81%AB%E3%82%88%E3%82%8A%E6%9C%AC%E6%9D%A5%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%A7%E4%BA%AB%E5%8F%97%E3%81%97%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AF%E3%81%9A%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95%E3%82%88%E3%82%8A%E3%80%81%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%81%AB%E3%81%8F%E3%81%95%E3%81%AE%E6%96%B9%E3%81%8C%E7%9B%AE%E7%AB%8B%E3%81%A4%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AF%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%99%E3%82%8B%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%AE%E6%95%B0%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%9A%E3%80%81%E8%80%83%E5%AF%9F%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0A%0A,jp%E3%80%91%E3%81%AF%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA%E8%A7%A3%E6%B3%95%E3%81%A7) [oai_citation:12,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:13,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**表:**
| レビュアー | レビュイー | 有用性 |
|:---:|:---:|:---:|
| シニア | シニア | 有用 |
| シニア | ジュニア | 有用 |
| ジュニア | シニア | 有用 |
| ジュニア | ジュニア | 絶対禁止 |

**例:**
```javascript
// レビュー用の簡単なコード
function add(a, b) {
  return a + b;
}
```
レビューの際には、コードの目的、使用したアルゴリズム、可能な改善点について議論します。

#### 5. 2倍よくなるか？
既存のアーキテクチャを置き換える際には、その変更が現行の2倍の効率をもたらすかを基準に判断します。これは、変更の価値を明確にし、費用対効果を見極めるためのシンプルな基準です [oai_citation:14,Don't Repeat Yourself](https://blog-dry.com/#:~:text=%E8%91%97%E8%80%85%E3%81%AF%E6%98%8E%E7%A2%BA%E3%81%AB%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AB%E3%81%AF3%E3%81%A4%E3%81%AE%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8B%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E8%BF%B0%E3%81%B9%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E5%9F%BA%E6%BA%96%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E9%80%86%E3%81%AB%E3%81%84%E3%81%86%E3%81%A8%E3%80%812%E3%81%A4%E4%BE%8B%E3%82%92%E6%80%9D%E3%81%84%E3%81%A4%E3%81%8F%E7%A8%8B%E5%BA%A6%E3%81%A7%E3%81%AF%E4%B8%80%E8%88%AC%E5%8C%96%E3%82%92%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%AF%E3%81%AA%E3%81%8F%E3%80%812%E3%81%A4%E3%81%AE%E4%BE%8B%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E9%96%A2%E6%95%B0%E3%81%AA%E3%82%8A%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8C%E3%81%B0%E3%81%9D%E3%82%8C%E3%81%A7%E6%B8%88%E3%82%80%E3%81%AE%E3%81%A0%E3%80%81%E3%81%A8%E3%81%84%E3%81%86%E3%81%93%E3%81%A8%E3%81%A7%E3%81%99%E3%80%82%0A%0A%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AF%E3%81%9F%E3%81%97%E3%81%8B%E3%81%AB%E6%95%B0%E3%81%8C%E5%A2%97%E3%81%88%E3%81%A6%E3%81%93%E3%82%8C%E3%81%B0%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AF%E5%A4%9A%E5%B0%91%E3%81%82%E3%82%8B%E3%81%AE%E3%81%A7%E3%81%99%E3%81%8C%E3%80%81%E6%AD%A3%E7%9B%B4%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88%E3%81%AB%E7%9B%B4%E9%9D%A2%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E6%96%B9%E3%81%8C%E5%A4%9A%E3%81%84%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%AE%E4%BB%95%E6%96%B9%E3%81%8C%E3%81%8D%E3%82%8C%E3%81%84%E3%81%A7%E3%81%AA%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%B0%E3%81%8B%E3%82%8A%E3%81%AB%E3%80%81%E5%88%A5%E3%81%AE%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%A7%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E8%A1%8C%E3%81%86%E3%81%A8%E8%BF%BD%E5%8A%A0%E3%81%A7%E3%81%95%E3%82%89%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AB%E3%81%AA%E3%82%8B%E3%82%88%E3%81%86%E3%81%AA%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E3%81%99%E3%80%82%E3%81%93%E3%82%8C%E3%81%AB%E3%82%88%E3%82%8A%E6%9C%AC%E6%9D%A5%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%A7%E4%BA%AB%E5%8F%97%E3%81%97%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AF%E3%81%9A%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95%E3%82%88%E3%82%8A%E3%80%81%E5%A4%89%E6%9B%B4%E3%81%AE%E3%81%97%E3%81%AB%E3%81%8F%E3%81%95%E3%81%AE%E6%96%B9%E3%81%8C%E7%9B%AE%E7%AB%8B%E3%81%A4%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%97%E3%81%BE%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AF%E3%80%81%E4%B8%80%E8%88%AC%E5%8C%96%E3%81%99%E3%82%8B%E3%80%9012%E2%80%A0%E3%83%A6%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%82%B9%E2%80%A0d.hatena.ne.jp%E3%80%91%E3%81%AE%E6%95%B0%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%9A%E3%80%81%E8%80%83%E5%AF%9F%E3%81%8C%E8%B6%B3%E3%82%8A%E3%81%AA%E3%81%84%E3%81%8C%E3%81%9F%E3%82%81%E3%81%AB%E8%B5%B7%E3%81%8D%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E3%81%A8%E8%A8%80%E3%81%88%E3%82%8B%E3%81%A8%E6%80%9D%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%0A%0A,jp%E3%80%91%E3%81%AF%E3%80%81%E3%81%A9%E3%81%A1%E3%82%89%E3%82%82%E5%8D%98%E7%B4%94%E3%81%AA%E8%A7%A3%E6%B3%95%E3%81%A7) [oai_citation:15,Marginalia](https://blog.lacolaco.net/) [oai_citation:16,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:17,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

#### 6. 優れた名前
優れた変数名や関数名は最高のドキュメントです。意味の分かる名前を付けることで、コードの可読性が向上します [oai_citation:18,Marginalia](https://blog.lacolaco.net/categories/diary) [oai_citation:19,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 悪い例
let x = 10;

// 良い例
let numberOfItems = 10;
```

#### 7. 失敗が起こる場合をなくす
関数の引数が多すぎるとエラーが発生しやすいです。初期化はデフォルト値を使用し、変更が必要な場合のみ設定するようにします [oai_citation:20,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 悪い例
const param = new Param(3, 'red', true, false, false);

// 良い例
const param = new Param().setLineWidth(3).setColor('red').setShadow(true);
```

#### 8. 実行されていないコードは動作しない
使用されていない関数やコードは削除します。これにより、バグの温床となる可能性を減らします [oai_citation:21,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 悪い例
function unusedFunction() {
  // 何もしない
}

// 良い例
// 使用されていない関数を削除
```

#### 9. 集約可能なコード
短期記憶に収まる認知負荷が低いコードを書くことが重要です。変数名を適切に付け、コードブロックが何をしているかを簡潔に記述します [oai_citation:22,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

**例:**
```javascript
// 悪い例
int sum = 0;
for (auto value : values) { sum += value; }

// 良い例
int sum = reduce(values, 0, add); // valuesの合計を求める
```

#### 10. 複雑性を局所化せよ
アプリケーションが巨大になればコードが複雑になるのは避けられませんが、複雑性を封じ込めることはできます。インターフェースを単純にし、その中身がいくら複雑でも外部から見えないようにします [oai_citation:23,〖ゲームプログラマ必読〗ルールズ オブ プログラミング - take_de_xのPluginDoctorで遊ぼう](https://dtm.take-de-x.jp/entry/2023/11/26/213413)。

これらのルールは、大規模なチーム開発での品質向上と生産性向上を目指したものです。自分のチームの状況に応じてカスタマイズすることで、さらに効果的に活用できます。
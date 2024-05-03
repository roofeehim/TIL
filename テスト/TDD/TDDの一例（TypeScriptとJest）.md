TypeScriptでTDDアプローチを用いた例を紹介します。シンプルな機能として、数値のリストを受け取り、その合計を返す関数を作成します。テストを書くためには、Jestなどのテストフレームワークを使用します。

### ステップ 1: テストの作成

まずは、機能をテストするための失敗するテストケースを書きます。

```typescript
// sum.test.ts
import { sum } from './sum';

describe('sum', () => {
  it('returns the sum of an array of numbers', () => {
    const numbers = [1, 2, 3];
    expect(sum(numbers)).toEqual(6);
  });
});
```

### ステップ 2: 最小限のコードの実装

次に、テストを通過させるための最もシンプルな実装をします。

```typescript
// sum.ts
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
```

### ステップ 3: リファクタリング

ここで実装されたコードは既にシンプルですが、テストの中で新たに検証する必要があるエッジケース（空の配列など）を追加して、コードの堅牢性を向上させることができます。

```typescript
// sum.test.tsのテストケースを追加
it('returns 0 for an empty array', () => {
  expect(sum([])).toEqual(0);
});
```

このテストもすでに実装された`sum`関数でパスしますが、将来的に`sum`関数の実装を変更する場合にこのテストがその機能を保証します。

この例では、TDDのサイクル（テストの作成、実装、リファクタリング）を通じて、効率的かつ効果的に機能を開発し、保守しやすいコードを維持しています。リファクタリングステップでは主にテスト側での改善が行われ、実装コードはすでにシンプルであるため、大幅な変更は不要でした。
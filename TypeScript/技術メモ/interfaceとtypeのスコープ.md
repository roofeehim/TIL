TypeScriptにおいて、`interface`と`type`のスコープは、以下のように扱われます。

### グローバルスコープ

**interface**
```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30,
};
```
`interface`はファイル全体で有効であり、モジュールの外部からもアクセス可能です。

**type**
```typescript
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "John",
  age: 30,
};
```
`type`もファイル全体で有効であり、モジュールの外部からもアクセス可能です。

### ローカルスコープ

**interface**
```typescript
function createUser() {
  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: "John",
    age: 30,
  };

  return user;
}
```
`interface`を関数内やブロック内で定義すると、そのスコープ内でのみ有効です。

**type**
```typescript
function createUser() {
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "John",
    age: 30,
  };

  return user;
}
```
`type`も同様に関数内やブロック内で定義すると、そのスコープ内でのみ有効です。

### モジュールスコープ

**interface**
```typescript
// file1.ts
export interface User {
  name: string;
  age: number;
}

// file2.ts
import { User } from './file1';

const user: User = {
  name: "John",
  age: 30,
};
```
`interface`はモジュール内で定義され、`export`キーワードを使って外部に公開できます。他のモジュールから`import`することで使用できます。

**type**
```typescript
// file1.ts
export type User = {
  name: string;
  age: number;
};

// file2.ts
import { User } from './file1';

const user: User = {
  name: "John",
  age: 30,
};
```
`type`も同様にモジュール内で定義され、`export`キーワードを使って外部に公開できます。他のモジュールから`import`することで使用できます。

### 結論

`interface`と`type`はどちらも、グローバルスコープ、ローカルスコープ、モジュールスコープで使用することができます。定義されたスコープに応じて、それぞれが有効となる範囲が異なりますが、基本的なスコープの概念は同じです。
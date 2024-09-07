1. Single Responsibility Principle (SRP):
一つのクラスは一つの責任だけを持つべきです。その責任とは、クラスが変更を必要とする理由を指します。この原則に従うことで、システムが柔軟で保守性の高いものになります。

```tsx
// GOOD
class User {
    constructor(public name: string) { }
}

class UserDB {
    save(user: User): void {
        // ユーザーの保存ロジック...
    }
}

// BAD
class User {
    constructor(public name: string) { }

    save(): void {
        // ユーザーの保存ロジック...
    }
}

```

1. Open-Closed Principle (OCP):
ソフトウェアのエンティティは開放（拡張）に対して開いており、修正（変更）に対して閉じているべきです。つまり、新しい機能を追加するときに既存のコードを変更せず、新しいコードを追加するだけで済むように設計するべきです。

```tsx
// GOOD
abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

// BAD
class Shape {
    constructor(public type: string, public width?: number, public height?: number) { }

    area(): number {
        if (this.type === "Rectangle") {
            return this.width * this.height;
        }
        return 0;
    }
}

```

1. Liskov Substitution Principle (LSP):
サブタイプはそのスーパータイプと置き換え可能でなければなりません。これは、派生クラスが基本クラスの振る舞いを変更すべきではないということを意味します。

```tsx
// GOOD
class Bird {
    fly(): void {
        console.log("Flying...");
    }
}

class Eagle extends Bird { }

// BAD
class Bird {
    fly(): void {
        console.log("Flying...");
    }
}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguins can't fly!");
    }
}

```

1. Interface Segregation Principle (ISP):
クライアントは自分が使わないメソッドに依存するべきではありません。これは、一つの一般的なインターフェースよりも、多くの特定的なインターフェースを持つ方が良いということを意味します。

```tsx
// GOOD
interface IWorker {
    work(): void;
}

interface IEater {
    eat(): void;
}

class Human implements IWorker, IEater {
    work(): void {
        console.log("Working...");
    }

    eat(): void {
        console.log("Eating...");
    }
}

class Robot implements IWorker {
    work(): void {
        console.log("Working...");
    }
}

// BAD
interface IHuman {
    work(): void;
    eat(): void;
}

class Robot implements IHuman {
    work(): void {
        console.log("Working...");
    }

    eat(): void {
        throw new Error("Robots can't eat!");
    }
}

```

1. Dependency Inversion Principle (DIP):
高レベルのモジュールは低レベルのモジュールに依存すべきではなく、両方とも抽象に依存すべきです。これは、具体的な実装よりもインターフェース（または抽象クラス）に依存するべきであるということを意味します。

```tsx
// GOOD
interface ILogger {
    log(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

class App {
    constructor(private logger: ILogger) { }

    run(): void {
        this.logger.log("App is running");
    }
}

// BAD
class ConsoleLogger {
    log(message: string): void {
        console.log(message);
    }
}

class App {
    constructor(private logger: ConsoleLogger) { }

    run(): void {
        this.logger.log("App is running");
    }
}

```

良い例では、Appクラスは具体的なConsoleLoggerクラスではなく、ILoggerインターフェースに依存しています。これにより、ロガーの具体的な実装を変更することなくAppクラスのコードを再利用できます。
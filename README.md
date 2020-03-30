# Simple Injection service

## Usage

Say, you have an interface and a concrete class:

```
interface Sample {
    test(): number;
}

class Test implements Sample {
    test(): number {
        return 1;
    }
}
```

First, register the things you want to use:

```
    Injector.register<Sample, Test>(new Test(), "test");
```

Then, wherever you want to use the thing you registered, call:

```
    Injector.resolve<Sample>("test")
```

This is useful if you do not want to bring in an entire di framework.

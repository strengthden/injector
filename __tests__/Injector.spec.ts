import { Injector } from '../src';

interface Sample {
    test(): number;
}

class Test implements Sample {
    test(): number {
        return 1;
    }
}

afterEach(() => {
    Injector.deregister("test")
  });

test('Successfully register and resolve', () => {
    Injector.register<Sample, Test>(new Test(), "test");

    const test = Injector.resolve<Sample>("test");

    expect(test.test()).toBe(1);
})

test('Fail to resolve if not registered', () => {
    expect(() => Injector.resolve<Sample>("test")).toThrowError("test is not registered")
})

test('Fail to register twice for the same key', () => {
    Injector.register<Sample, Test>(new Test(), "test");

    expect(() => Injector.register<Sample, Test>(new Test(), "test")).toThrowError("test has already been registered")

})

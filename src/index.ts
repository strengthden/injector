const mapOfInjectedClasses = new Map<string, any>();

export class Injector {
    static register<T, Y extends T>(instance: Y, name: string): void {
        if (mapOfInjectedClasses.has(name)) throw new Error(`${name} has already been registered`)
        mapOfInjectedClasses.set(name, instance)
    }

    static registerWithOverride<T, Y extends T>(instance: Y, name: string): void {
        mapOfInjectedClasses.set(name, instance)
    }

    static deregister(...names: string[]): void {
        for (let name of names) {
            mapOfInjectedClasses.delete(name)
        }
    }

    static resolve<T>(name: string): T {
        if (!mapOfInjectedClasses.has(name)) throw new Error(`${name} is not registered`)
        return mapOfInjectedClasses.get(name) as T;
    }    

    static isRegistered(name: string): boolean {
        return mapOfInjectedClasses.has(name);
    }
}
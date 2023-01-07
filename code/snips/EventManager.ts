/**
 * Class to register and fire events with callbacks
 */
class EventManager {

    /**
     * register of all registered events and callbacks
     */
    private registry = new Map<string, ((event: unknown) => void)[]>()

    constructor() {

    }

    /**
     * adds a callback associated with the event name
     */
    on(eventName: string, callback:(event: unknown) => void) {

        if (!this.registry.has(eventName)) {
            this.registry.set(eventName, []);
        }

        // not undefined we just set it
        this.registry.get(eventName)!.push(callback);
    }

    /**
     * removes 1st occurrence of eventName with matching callback
     */
    off(eventName: string, callback:(event: unknown) => void) {
        const handlers = this.registry.get(eventName);
        if (handlers !== undefined) {
            const index = handlers.findIndex((handler) => handler === callback);
            if (index !== -1) {
                handlers.splice(index, 1);
            }
        }

    }

    /**
     * fires an event for the event name
     * calls each callback associated with eventName passing the provided event
     */
    fire(eventName: string, event: unknown) {
        const handlers = this.registry.get(eventName);
        if (handlers !== undefined) {
            // note: this passes by reference so the handler should not make changes to the event object
            // if a handler makes a change to the event object subsequent callers will get the modified object
            handlers.forEach((handler) => handler(event));
        }
    }
}


// Example usage

class ExampleClassWithEvents {

    private eventManager = new EventManager();

    // Example override for typing
    // You want the overrides otherwise it gets hard to keep track of events.
    on(eventName: "eventNameA", callback:(event: {n: number}) => void): void
    on<T>(eventName: string, callback: (event:T) => void) {
        this.eventManager.on(eventName, callback as (event: unknown) => void);
    }

    off(eventName: "eventNameA", callback:(event: {n: number}) => void): void
    off<T>(eventName: string, callback: (event: T) => void) {
        this.eventManager.off(eventName, callback as (event: unknown) => void);
    }

    fire(eventName: "eventNameA",  event: {n: number}):void
    fire<T>(eventName: string, event: T) {
        this.eventManager.fire(eventName, (event as unknown));
    }
}

const manager = new ExampleClassWithEvents();

function handler({n}:{n: number}) {
    console.log(`number ${n}`);
}

// example event registry
manager.on("eventNameA", handler);

manager.fire("eventNameA", {n:1});

manager.off("eventNameA", handler);

manager.fire("eventNameA", {n:2});
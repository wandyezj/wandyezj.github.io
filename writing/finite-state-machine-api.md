# Finite State Machine API

Describe a [finite state machine (FSM)](https://en.wikipedia.org/wiki/Finite-state_machine) in JSON.

A FSM is a Directed Graph where vertices are states and edges are transitions.

Two components:

- states
- transitions

Each state and component must be uniquely identifiable.

Events trigger transitions between states.

- What is the current state?
- What transitions are available and what states to they go to?
- When did a transition occur?

## JSON Description of States and Transitions

```typescript
interface MachineJson {
  description?: string;
  /**
   * State the machine should start in.
   */
  startState: string;

  /**
   * Final state for the machine
   */
  stopState?: string;

  /**
   * All possible states for the machine
   */
  states: { [id: string]: StateJson };
  
  /**
   * All possible transitions between states for the machine
   */
  transitions: { [id: string]: TransitionJson[] };
}

interface StateJson {
  description?: string;
}

/**
 * Describes a transition between states
 */
interface TransitionJson {
  description?: string;
  stateFrom: string;
  stateTo: string;
}

const example: MachineJson = {
    description: "coin operated turnstyle state machine on wikipedia",
    startStateId: "locked"
    states: {
        "locked": {},
        "unlocked":{}
    },
    transitions: {
        "locked-to-unlocked": {
            description: "Coin",
            stateFrom: "locked",
            stateTo: "unlocked"
        },
        "unlocked-to-locked" : {
            description: "Push",
            stateFrom: "unlocked",
            stateTo: "locked"
        },
        "unlocked-to-unlocked" :{
            description: "Coin",
            stateFrom: "unlocked",
            stateTo: "unlocked",
        },
        "locked-to-locked" : {
            description: "Push",
            stateFrom: "locked",
            stateTo: "locked"
        }
    }
}

function convert
```


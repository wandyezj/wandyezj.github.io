# Safe Script

- Security
    - Origin
    - Access Control
    - Fidelity
- Provability

- Proof of origin, sign script, access to certificate store
- Open access to code so can be manually review the script
    - Code needs to be simple enough to understand and well documented for complex code
    - Eliminating complex language features and interactions can make the code easer to read

- Limit what external libraries can do, requires built in APIs for all permissions.

- Permissions
    - compute resources
        - memory
        - CPU
            - need model of how expensive each command is to run, can be built of system stats over time
        - GPU
    - IO
        - external information from the system
        - Camera
        - environment variables
        - network
        - file system
        - time
    - Specific DLLs to link code (But then give up other properties since DLLs can do anything)


- Script comes with a list of needed permissions
    - permissions can be automatically derived from a scan of the script
- Script can only access what it has been given permission to access

- Prove specific script properties

- want a single .exe file with no additional associated data, except maybe a readme.

- Cross Compilable
    - able to output equivalent code in multiple languages

## Uses

- Enterprise Automation
- Generic Scripting


## Properties

What properties of the programming language or execution environment are necessary to guarantee these properties?

- prove things about specific code paths
    - complexity of the program
    - expected runtime and memory usage for a given size input
- detect all references to external functions so that these can be accurately exposed to the running of the script so they can make a decision?
    - In current languages this has to be done manually which is annoying


- don't have features beyond the minimum needed. Don't add lots of features. The goal is to write fast provable scripts.



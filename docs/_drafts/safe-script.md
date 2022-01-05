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
    - network
    - file system
    - compute resources
        - memory
        - CPU
        - GPU
    - IO
        - Camera
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

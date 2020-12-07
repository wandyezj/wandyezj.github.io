# Visual Studio Code Launch Configuration

## Jest Debugging

Enable F5 debugging on a Jest unit test
```json
{
    "version": "0.2.0",
    "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Jest watch current file",
          "program": "${workspaceFolder}/node_modules/jest/bin/jest",
          "args": [
            "${fileBasename}",
            "--verbose",
            "-i",
            "--no-cache",
          ],
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen"
        }
    ]
}
```
# Smart Light

A class to teach Product Management

Possible Test case

Design, Manufacture, Marketing, and Sale of a smart light bulb

the full product cycle

bring engineering and business together


## Capabilities

What should the product achieve?

- Controllable from phone?
- How many independent lights in the same location?
- Control a single light?
- Control an array of lights?
- What features?
- What colors?
- Secure?
- Open Source Design and Code as a feature?
- What types of interaction with the light should be supported?
- Sensors
    - Temperature
    - Light - Photovoltaic, Infrared
    - Noise
    - Thermal
    - Motion - Ultrasonic, Vibration, Accelerometer
    - Touch - Capacitive Touch
    - Humidity
    - Magnetic - Hall Sensor
    - Air Quality
    - GPS?

What Technology exists?

- Azure Sphere
- Nordic Bluetooth, BLE?
- iOS, Android, PC?

- WiFi verses Bluetooth


- How can an Azure Sphere report what piece of code it runs?
- How can it be assured that the code on an Azure Sphere device is the version it reports to be?

- Azure Sphere would need a special function to show it's identity and report what version of it's OS and the version of the application it is running. This has to bypass the applications control.


## Sourcing

What is the cost of various components at scale?

## Prototype

Select technology attempt to implement requirements

## Manufacturing

## Marketing

Where are you going to advertise and sell the product?

What is the message of your product?

## Sales

How are you going to sell the product?


## Technical

Networking is a key aspect

- WiFi
    - How to connect to the wifi network?
    - UDP broadcast to communicate between devices?

- Bluetooth
    - can communicate directly

To connect to WiFi needs to connect to either a insecure Guest Network or needs to be given the password. This means without an physical interface bluetooth is the best option.

HC-O5 chip supporting SPP
- BC417 Single-Chip Bluetooth IC that is compliant with Bluetooth v2.0 standard and can support both the UART and USB interfaces.

MicroBit is low cost Micro Controller

Azure Sphere comes with wifi built in, but would need a seperate bluetooth chip

Want to prototype out full experience using easy to use development boards before figuring out how to scale up

https://www.youtube.com/watch?v=Kfe3IYhiKFo&t=321s

https://github.com/NordicPlayground/nRF52-Bluetooth-Course

Raspberry Pi 4 with 4 GB is $55 2GB is $35 has Bluetooth 5 and WiFi
Raspberry pi 400 has a keyboard

PlatformIO Extension in Visual Studio Code

How to have the Raspberry PI access WiFi and 

BlueZ Bluetooth stack

https://www.argenox.com/library/bluetooth-low-energy/using-raspberry-pi-ble/

Board                   | Bluetooth Chipset | Bluetooth Supported
---                     | ---               | ---
Raspberry Pi 3 Model A+ | Broadcom BCM43438 | Bluetooth 4.1
Raspberry Pi 3 Model B  | Broadcom BCM43438 | Bluetooth 4.1
Raspberry Pi Model 3B+  | Cypress CYW43455  | Bluetooth 4.2
Raspberry Pi 4 Model B  | Cypress CYW43455  | Bluetooth 5.0


https://pimylifeup.com/raspberry-pi-bluetooth/

bluetoothctl

Is it desireable to automatically pair with all available devices?

Pi is an indoors only device


https://www.bluez.org/about/
node-ble3

https://learn.adafruit.com/circuitpython-nrf52840/bluetooth-basics

## Potential Hardware List

- Azure Sphere
- Raspberry Pi 400
    - Essentially a Miniature Computer
    - Benefit of being able to log on an see what is going on + have a file system etc...
- Arduino 
    - Arduino Sense 33 BLU - Bluetooth Only
    - https://docs.arduino.cc/hardware/nano-33-iot - WiFi and Bluetooth
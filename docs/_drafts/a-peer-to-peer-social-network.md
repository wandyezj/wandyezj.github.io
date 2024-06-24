# A Peer to Peer Social Network

Free social networks from the tyranny of the server.

Distribute the server element to all clients so no organization can control the network and have a monopoly on participants data. Free networks from the tyranny of censorship. Free communication from control of anyone.

How to make it fast?
Subscription

## Questions

How can the network grow organically?

## Existing Technologies

BitTorrent

RSS Feeds

FreeNet

IP Addresses

## Identifier

UTF16 2-4 bytes per character

- alias
- image

## Thoughts

The key task s to develop a reliable social network protocol not under the control of any entity.

Clients contain all the information available in the network.

Clients are contacted via temporary IP address that allow connection between clients.

Clients are only available as long as their IP address remain fixed. It is preferred that IP addresses can change dynamically both for convenience and privacy.

It is also preferred that packages can be sent to clients without a return address for greater privacy, since the client on the end of the IP address could change at any time.

Clients need a way to uniquely identify each other on the network as their IP addresses change.

This means that clients need a way to distribute identifying Key Pairs. The key pairs shared between every client need to be unique. Each client needs a private key to encrypt messages and a public key only shared with a single other client to decrypt the message. This way no client can understand another clients messages, unless a client shared the public key. This allows each client to decide which other clients to trust.

Clients need ways to discover each other.

What is the frequency with which IP addresses are recycled? Mostly infrequently for a router



Clients register with other clients 

Registrars are a 'phone book' of available clients.

Clients should keep all their data local and only send out data upon request. Popular pieces of the data could be stored on the network in other clients. This makes it impossible to shut down a piece of content once it has been distributed.


Like any piece of technology this one is subject to abuse. How can abuse be prevented? Well if it is well designed it cannot. Instead people would have to infiltrate the human network that makes up the social network and follow laws instead. This would increase expense and force enforcement to only the most egregious examples of abuse. This would also require more collaboration from enforcement agencies which is beneficial to everyone.

IP address is traceable to a physical location even with a VPN since VPN providers can be compelled by law to provide logs upon request. This vastly eases enforcement to abuse as determined by law.

## Technology

Points and Channels.

Android Phones are the most widely distributed computing element. So any system should allow these phones to be used as the base.

Bluetooth 5 400m range is present on even low end phones.

Low end hardware commodity hardware that can be flashed to serve as redistribution points and further increase the robustness of the network.

## Control of Data

Data once released to the network can not easily be removed from the network, this is simply a rule of any network. Good nodes could respect deletion requests, however a bad node could choose to archive any piece of data.

One possibility is to only communicate with trusted nodes or to anonymize information.
an node can choose which nodes it decides to trust. Trust goes both ways.

Since infinite nodes can be added the transmission and prevalence of data or is up to who controls the codes.



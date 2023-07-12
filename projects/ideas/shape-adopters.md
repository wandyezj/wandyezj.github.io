# Shape Adopters

I used to play a casual game called Dragon Adopters. The game was quite simple and pretty fun.

Unfortunately the game went offline due to a legacy codebase and lack of desire to maintain the site.

Dragon Adopters is an interesting case of a single point of failure and the cost of unmaintainable code.

The idea is to build a similar website that achieves the same type of functionality with a sustainable codebase, infrastructure, and community.


Key Functionality

- Accounts
    - sign up
    - need to answer a few geometry questions (get rid of bots)
    - log in
    - modification
    - GDPR compliance
    - people need to be able to log in and modify only their own account.
    - Sign up using Microsoft account

- Database
    - people do operations fundamentally only on their own account or on an account basis, this means that a distributed no-SQL database is the preferred architecture.
    - All account data can be represented as a JSON blob.
    - Forum posts similarly are done on a post basis which have similar ID rules.
    - Technology Choice: Azure Cosmos DB?

- Server
    - a server is needed to handle load and save requests to the database.
    - Technology choice: node

- Client
    - client should be static website contents hosted behind a CDN


Game Play

There are a lot of things that can be done with shapes

Login
Shapes can be adopted into your art gallery

Start with one shape

Ellipse, Triangle, Rectangle
Circle, Right Triangle, Square

Shapes generate and are fed color, shapes are art and generate impressions which can be spent on things to modify and improve the shape and the gallery

Translations
- rotate
- translate

- spin around axis to create 3D equivalent depending on axis of rotation
    - Circle -> Sphere
    - ellipse -> ellipsoid
    - square -> cylinder or double cone
    - triangle -> cone or double cone or other 

can name the shapes

Shapes can be fed color to change their color

angles, segments, and vertices

color can change the shapes color
shape grow bigger over time

Grow as an artist have an artist level

Befriend other artists

visiting other artists galleries gives inspiration which can be used to purchase other items

Items

Can have different levels

- pedestal
- frame
- plaque

custom canvas give access to underlying canvas API, would have to be careful to make sure to avoid injection of custom JavaScript.
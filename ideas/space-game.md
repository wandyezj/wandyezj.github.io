# Space Game

What makes the game fun? How to keep it fun without micro management?



4x
Explore
Expand
Exploit
Exterminate

## Example Games

- Crusader Kings
- Masters of Orion
- Galactic Civilizations
- Sid Meijers Alpha Centauri
- Space Empires
- Civilization
- Dwarf Fortress

## Thoughts

Generally in space games there are two designs:

- warp points - Directed Graph
- open space - can move anywhere on a grid or in space

Warp points tend to bog down into defense of strategic areas
Open space means any area is subject to attack. It also possible to have open space with warp points or strategic locations.

One thing that is annoying is planetary defense / invasion. From a real standpoint invasion could be extremely costly especially if there were rebel factions. It's more reasonable to blockade (The planet could still be self sustaining)

- invade
- blockade
- bombard
- cleanse

getting into the nitty gritty details probably isn't super fun for players, its probably better to choose options from a list.

One question would be what is the value of capturing planets? It's far more efficient for most industry or most objectives to be in space. Thus planets would mostly be about a place for people to live. Planets would be centers of administration, research, engineering, culture, archeology etc.. As most industry could be off planet. Similarly planetary defenses would be around the planet and not on it. This would make planets that are easily habitable valuable to the population. However, different cultures might view planets and living in space differently. In some ways space would be a much more interesting place to build than on planets.


It's common in these types of games to have new of something happening somewhere come along or to have announcements such as the Galactic News Network, or announcements of wonders being built, or comparisons of different empires

Generally players compete towards a fixed set of victory conditions

In contrast games like Crusader Kings allows player to pick their own objectives.

In a story driven game it makes sense for different empires to have different short term and long term objectives instead of all competing for the same goal. Games such as Sid Meijers Alpha Centauri made each faction seem unique with different objectives even if ultimately all were competing for the same goals.

All sorts of objectives are available and can overlap

- Conquer -> But why?
- Produce Art
- Produce Wealth
- Build Wonders
- Unlock the secrets of the universe
- Explore
- Be left alone
- Have population become happy

A key piece of fun might be the role play of playing a civilization, in a wider galexy where there aer different objectives

Turn based or Time based? A key issue with both is that it's not easy to simply skip forward until something interesting happens, essentially this requires quick compute times. Frequently the AI computation is favored over the players game play, the player has to wait for AI, that's annoying. The player should be able to skip to what they find fun.

Micro and Macro management - it can be great fun to customize individual planets, but at the same time this becomes annoying when things proliferate.

It might be more interesting to have a certain number of command point that can be used for specific actions

Heroes - Every civilization needs heroes and leaders that can become legendary, part of the fun is seeing how the civilization evolves and seeing leaders and heroes perform heroic deeds.

Don't want too many heroes, heros should spawn instead of players being able to hire them, keeping heroes rare keeps them interesting and unique

Games like Crusader Kings or Dwarf Fortress really focus on the people aspect 

Building of the palace in Civilization III visible reward for progress

Civilization III -> we love the ruler days fireworks over cities

Spying knowing more about others or internal politics

Discover lore or history about the galaxy or empire artifacts etc...

It it possible to procedurally generate stories that are not simply templates and are unique?

Politics - worry about keeping people happy?

Dialogs too many dialogs in many games focus should be kept on player objectives the game shouldn't interrupt - flavor text should be flavor

Meaningful unit designs - It more interesting when unit composition and deployment can have impact on the empire



Meaningful research decisions, want both planned and unplanned results

Doesn't have to be realistic just has to be fun.



## Technical

A turn based grid based game is easier to implement than a real time strategy game.

separate the UI from underlying engine

Game is a complex state machine with global values that can be saved and loaded.

Every entity should have a unique id to identify it.

- makes the most sense to store things by system?
- need to be able to retrieve all ships for a player, but this could be done by iterating over a system, but it might be easier to simply store each entity in its own set and then produce data structures on top of everything.

most entities are in a system with specific coordinates attached, this means each instance can simply stored with coordinates.

essentially want two views all entities and entities by system for drawing. The technical pieces can be abstracted by a data structure that contains all global entities, and simply provides methods to retrieve them.

## views

Star Chart - all systems in the game, empty space in between systems -> possible to travel between systems without warp points but would take forever
System Map - individual star with planets

## Entities


- system

- planets
    - facilities
- ships
    - components
- bases
    - components
- Warp Points
- asteroids
- orders




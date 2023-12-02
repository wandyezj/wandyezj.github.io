data = """
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
"""

lines = data.strip().split("\n")

def getGameFromLine(line):
    [game, rounds] = line.split(":")
    id = int(game.strip().split(" ")[1])
    rounds = rounds.split(";")

    game_rounds = []
    for round in rounds:
        colors = round.strip().split(", ")
        round_colors = {"red": 0, "green": 0, "blue": 0}
        for color in colors:
            [number, color] = color.strip().split(" ")
            round_colors[color] = int(number)
        game_rounds.append(round_colors)

    return [id, game_rounds]

def validRound(round):
    return round["red"] <= 12 and round["green"] <= 13 and round["blue"] <= 14

def validGame(game):
    for round in game:
        if not validRound(round):
            return False
    return True

total = 0
for line in lines:
    [id, rounds] = getGameFromLine(line)
    #print(id, rounds)
    if validGame(rounds):
        total += id
print(total)
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

def maxColor(rounds, color):
    return max(list(map(lambda round: round[color], rounds)))

def colorPower(rounds):
    return maxColor(rounds, "red") * maxColor(rounds, "green") * maxColor(rounds, "blue")

total = 0
for line in lines:
    [id, rounds] = getGameFromLine(line)
    p = colorPower(rounds)
    total += p
print(total)
data = """
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
"""

# break into lines
lines = data.strip().split("\n")

total = 0

ALTS = "one, two, three, four, five, six, seven, eight, nine".split(", ")

# go through each line
for line in lines:
    #print(line)

    # turn string into list of characters
    l = list(line)
    #print(l)

    # Filter down to the digits
    digits = []
    for c in l:
        if c.isdigit():
            digits.append(c)
        # check for alternative digit and translate to index
    #print(digits)

    # get first and last digit
    first = digits[0]
    last = digits[-1]
    #print(first)
    #print(last)

    total += int(first + last)

print(total)

data = """

"""

# break into lines
lines = data.strip().split("\n")

total = 0

ALTS = "one, two, three, four, five, six, seven, eight, nine".split(", ")
print(ALTS)
def altStart(s):
    for i in range(len(ALTS)):
        alt = ALTS[i]
        if s.startswith(alt):
            return i + 1
    return 0

# go through each line
for line in lines:
    #print(line)

    # turn string into list of characters
    l = list(line)
    #print(l)

    # Filter down to the digits
    digits = []
    for i in range(len(line)):
        c = line[i]
        if c.isdigit():
            digits.append(c)
        else:
             # check for alternative digit and translate to index
            #print(line[i:])
            start = altStart(line[i:])
            #print(start)
            if start != 0:
                digits.append(str(start))
           
    #print(digits)

    # get first and last digit
    first = digits[0]
    last = digits[-1]
    #print(first)
    #print(last)

    value = int(first + last)
    #print(value)
    total += value

print(total)

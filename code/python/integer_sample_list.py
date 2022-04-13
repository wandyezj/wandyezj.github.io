# Gather stats about entered integers

s = []

# gather some numbers until q is entered
while True:
    v = input("number:")
    
    # stop gathering numbers if q is entered
    if v == "q":
        break

    # dont enter anything besides numbers and q or this will raise an exception
    n = int(v)
    s.append(n)

print()
print("numbers entered")
print(s)

# gather some number stats about the numbers entered
# how many zeroes, single digit, and negative numbers were there?
zero = 0
single = 0
negative = 0
for n in s:
    if n == 0:
        zero += 1

    if n >=0 and n <= 9:
        single += 1

    if n < 0:
        negative += 1


print(f"""
number stats

zeroes:   {zero}
singles:  {single}
negative: {negative}
""")
    

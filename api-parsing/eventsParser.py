with open("events.txt") as f:
    for line in f.readlines():
        line = line.rstrip()
        print(line)
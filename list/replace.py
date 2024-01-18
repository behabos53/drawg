import random
import os

with open('list/list.txt', 'r') as f:
    lines = [line.strip() for line in f]

random.shuffle(lines)

for i in range(0, len(lines), 16):
    with open(f'/home/kim/Documents/project/randomized/group-list/group-{i//16 + 1}.txt', 'w') as f:
        for team in lines[i:i+16]:
            f.write(f"{team}\n")
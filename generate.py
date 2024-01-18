import random
import string

def generate_random_name():
    name_length = random.randint(5, 10)
    name = ''.join(random.choices(string.ascii_uppercase, k=name_length))
    return name

team_names = [generate_random_name() for _ in range(256)]

random.shuffle(team_names)

group_size = 16
num_groups = len(team_names) // group_size

for group_num in range(num_groups):
    file_name = f"group-{group_num + 1}.txt"
    start_index = group_num * group_size
    end_index = start_index + group_size
    group_teams = team_names[start_index:end_index]

    with open(file_name, "w") as file:
        for i, team_name in enumerate(group_teams, start=1):
            file.write(f"{i} {team_name}\n")

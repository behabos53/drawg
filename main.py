import random

def generate_groups(num_teams, num_groups):
    # Read the team list from team.txt
    with open('team.txt', 'r') as file:
        teams = file.read().splitlines()

    # Shuffle the team list randomly
    random.shuffle(teams)

    # Divide the teams into groups
    groups = [teams[i:i+num_teams] for i in range(0, len(teams), num_teams)]

    # Print the randomized teams
    for i, group in enumerate(groups[:num_groups]):
        print(f"Group {i+1}: {group}")

    return groups

def save_groups(groups):
    with open('groups.txt', 'w') as file:
        for i, group in enumerate(groups):
            file.write(f"Group {i+1}: {group}\n")

def reset_groups():
    with open('groups.txt', 'w') as file:
        file.write("")

# Generate and print 1 group with 16 teams
groups = generate_groups(16, 1)

# Save all groups to a file
save_groups(groups)

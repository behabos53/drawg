def sort_teams():
    """
    Sort the teams in 'list/list.txt' and write them to 'list/sortteam.txt'.
    """
    # Read teams from 'list/list.txt'
    with open('list/list.txt', 'r') as file:
        teams = file.read().splitlines()

    # Sort the teams
    teams.sort()

    # Write the sorted teams to 'list/sortteam.txt'
    with open('list/sortteam.txt', 'w') as file:
        for team in teams:
            file.write(f"{team}\n")

if __name__ == "__main__":
    sort_teams()
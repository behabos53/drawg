def check_duplicate_teams():
    """
    Check if there are any duplicate teams across all groups.

    Returns:
    - bool: True if there are duplicate teams, False otherwise.
    """
    # Get all teams that have been selected
    selected_teams = []
    for i in range(1, 17):  # Assuming there are 16 groups
        with open(f'group-list/group-{i}.txt', 'r') as file:
            selected_teams.extend(file.read().splitlines())

    # Check if there are any duplicate teams
    return len(selected_teams) != len(set(selected_teams))

if __name__ == "__main__":
    if check_duplicate_teams():
        print("There are duplicate teams.")
    else:
        print("There are no duplicate teams.")
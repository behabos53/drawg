from flask import Flask, render_template, request
import random

app = Flask(__name__)

# Create a mapping from numbers to letters
number_to_letter = {i: chr(64 + i) for i in range(1, 27)}

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/drawing/<int:group_number>', methods=['GET'])
def drawing(group_number):
    """
    Handle GET request for '/drawing/<group_number>' endpoint.

    Parameters:
    - group_number (int): The group number to retrieve teams from.

    Returns:
    - str: The rendered HTML template with the teams and next group number.
    """
    def get_teams(group_number):
        if group_number > 16:
            return "No more groups to draw."

        # Read teams from list/list.txt
        with open('list/list.txt', 'r') as file:
            all_teams = file.read().splitlines()

        # Get all teams that have already been selected
        selected_teams = []
        for i in range(1, group_number):
            with open(f'group-list/group-{i}.txt', 'r') as file:
                selected_teams.extend(file.read().splitlines())

        # Remove already selected teams from all teams
        available_teams = [team for team in all_teams if team not in selected_teams]

        # Select 16 random teams
        teams = random.sample(available_teams, 16)

        file_path = f'group-list/group-{group_number}.txt'

        # Write the random teams to the group file
        with open(file_path, 'w') as file:
            for team in teams:
                file.write(f"{team}\n")

        return render_template('teams.html', teams=teams, next_group_number=group_number+1, group_number=group_number, group_letter=number_to_letter.get(group_number, ''))

    return get_teams(group_number)

if __name__ == '__main__':
    app.run(debug=True)
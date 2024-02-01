from flask import Flask, render_template, request

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
        if group_number > 4:
            return "No more groups to draw."

        file_path = f'group-list/group-{group_number}.txt'

        with open(file_path, 'r') as file:
            teams = file.read().splitlines()

        next_group_number = group_number + 1

        # Convert the group number to a letter
        group_letter = number_to_letter.get(group_number, '')

        return render_template('teams.html', teams=teams, next_group_number=next_group_number, group_number=group_number, group_letter=group_letter)

    return get_teams(group_number)

if __name__ == '__main__':
    app.run(debug=True)
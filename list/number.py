"""
Reads lines from a file, adds line numbers to each line, and writes the modified lines back to the file.

Parameters:
- file_path (str): The path of the file to read and write.

Returns:
None
"""
with open('/home/kim/Documents/project/randomized/list/list.txt', 'r') as f:
    lines = f.readlines()

with open('/home/kim/Documents/project/randomized/list/list.txt', 'w') as f:
    for i, line in enumerate(lines, start=1):
        if i > 256:
            break
        f.write(f"{i}. {line}")
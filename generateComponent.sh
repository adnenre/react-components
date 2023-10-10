#!/bin/bash

# Check if both folder name and path arguments are provided
if [ $# -lt 1 ]; then
    echo "Usage: $0 <folder_name> [path]"
    exit 1
fi

# Get the folder name from the command line argument
folder_name="$1"

# Check if a path argument is provided, otherwise use a default path
if [ $# -eq 2 ]; then
    path="$2"
else
    # Default path (change this to your desired default path)
    path="src/components"
fi

# Create the folder in the specified path
mkdir -p "$path/$folder_name"

# Change to the folder directory
cd "$path/$folder_name"

# Create two files with parts of the folder name
file1="${folder_name}.Styled.js"
file2="index.js"
file3="${folder_name}.spec.js"
touch "$file1"
touch "$file2"
touch "$file3"

# Optional: Display a message indicating the folder and files have been created
echo "Folder '$folder_name' created in '$path' with '$file1' , '$file2' and '$file3' inside."

#!/bin/bash

# Check the status of your repository
echo "Checking Git status..."
git status

# Automatically stage all changes (modified and untracked files)
echo "Staging all changes..."
git add .

# Ask the user for a custom commit message
read -p "Enter your commit message: " commit_message

# Commit changes with the user's input message
echo "Committing changes..."
git commit -m "$commit_message"

# Pull latest changes from the remote repository
echo "Pulling latest updates from Git..."
git pull origin master

# Push your committed changes to the remote repository
echo "Pushing changes to Git..."
git push origin master

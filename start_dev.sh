#!/bin/bash

# Navigate to the backend directory
cd backend

# Activate virtual environment
if [ -f "venv/bin/activate" ]; then
    source venv/bin/activate
    echo "Virtual environment activated"
else
    echo "Virtual environment not found. Exiting."
    exit 1
fi

# Start Flask server
if flask run &>/dev/null & then
    echo "Flask server started"
else
    echo "Failed to start Flask server. Exiting."
    exit 1
fi

# Navigate back to the root folder or frontend directory (if applicable)
cd ..

# Start frontend with npm
npm run dev

# Keep Flask and npm servers running
wait


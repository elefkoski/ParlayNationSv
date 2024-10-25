#!/bin/bash

# Stop Flask server (adjust port if necessary)
flask_pid=$(pgrep -f 'flask run')
if [ ! -z "$flask_pid" ]; then
    kill -9 $flask_pid
    echo "Flask server stopped"
else
    echo "No Flask server running"
fi

# Stop npm (or Node) server running on port 5173
node_pid=$(lsof -t -i :5173)
if [ ! -z "$node_pid" ]; then
    kill -9 $node_pid
    echo "Node/npm server stopped"
else
    echo "No Node/npm server running on port 5173"
fi

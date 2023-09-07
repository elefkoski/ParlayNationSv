import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)''')

# Commit the changes
conn.commit()

# Close the connection
conn.close()

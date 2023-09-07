import sqlite3


def setup_database():
    # Connect to SQLite database
    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    # Drop the existing tables if they exist
    c.execute("DROP TABLE IF EXISTS users_auth;")
    c.execute("DROP TABLE IF EXISTS users_profile;")

    # Create a new table for user authentication
    c.execute("""
        CREATE TABLE users_auth (
            id INTEGER PRIMARY KEY,
            display_name TEXT NOT NULL UNIQUE,
            password TEXT,
            email TEXT NOT NULL UNIQUE,
            redirect_url TEXT,
            oauth_provider TEXT,
            oauth_id TEXT,
            oauth_token TEXT,
            oauth_expires_at DATETIME
        );
    """)

    # Create a new table for user profiles
    c.execute("""
        CREATE TABLE users_profile (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            first_name TEXT,
            last_name TEXT,
            profile_pic TEXT,
            bio TEXT,
            FOREIGN KEY (user_id) REFERENCES users_auth (id)
        );
    """)

    # Commit changes and close the connection
    conn.commit()
    conn.close()


# Run the function to set up the database
setup_database()

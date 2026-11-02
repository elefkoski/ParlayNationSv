from flask import Flask, request, jsonify
from flask_cors import CORS
from functools import wraps
import os
from jwt import decode, InvalidTokenError
# from PyJWT import decode, InvalidTokenError

app = Flask(__name__)
CORS(app)
secret_key = os.environ.get('FLASK_SECRET_KEY')
if not secret_key:
    raise RuntimeError('FLASK_SECRET_KEY environment variable is not set')
app.config['SECRET_KEY'] = secret_key


def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].replace('Bearer ', '')

        if not token:
            return jsonify({"status": "Token is missing!"}), 401

        try:
            # Decode the Firebase JWT here
            data = decode(token, app.config.get(
                "SECRET_KEY"), algorithms=["HS256"])
            current_user_id = data['sub']
        except InvalidTokenError:
            return jsonify({"status": "Token is invalid!"}), 401

        return f(current_user_id, *args, **kwargs)

    return decorated_function


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/logout', methods=['POST'])
@token_required
def logout(_current_user_id):
    # Handle user logout here
    # With Firebase, logout is mostly managed on the frontend, but you can do server-side activities here if needed.
    return jsonify({"status": "Logged out"})


if __name__ == '__main__':
    app.run(debug=False)

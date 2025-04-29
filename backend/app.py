from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# First connect to MySQL without database to create it if needed
engine = create_engine('mysql+pymysql://root:@localhost/')
with engine.connect() as conn:
    conn.execute(text('CREATE DATABASE IF NOT EXISTS flask_react_db'))
    conn.commit()

# Configure MySQL connection
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'mysql+pymysql://root:@localhost/flask_react_db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'email': self.email
        }

# Create database tables
with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        
        # Check if user already exists
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 400

        # Create new user
        new_user = User(
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['email']
        )
        new_user.set_password(data['password'])

        # Save to database
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            'message': 'User registered successfully',
            'user': new_user.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/users', methods=['GET'])
def get_users():
    try:
        users = User.query.all()
        return jsonify({
            'users': [user.to_dict() for user in users],
            'count': len(users)
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

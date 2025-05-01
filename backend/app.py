from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
from sqlalchemy import Enum as SqlEnum
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Get DB config from .env
db_user = os.getenv('DB_USER')
db_pass = os.getenv('DB_PASS')
db_host = os.getenv('DB_HOST')
db_name = os.getenv('DB_NAME')
db_port = os.getenv('DB_PORT', '3306')

# Construct DB URI
db_url = f'mysql+pymysql://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}'
app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'user'

    idUser = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(50), nullable=False)
    prenom = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)
    taille = db.Column(db.Numeric(4, 2))
    poids = db.Column(db.Numeric(5, 2))
    objectif = db.Column(db.String(100))
    sexe = db.Column(SqlEnum('M', 'F', 'Other'))
    meals_perday = db.Column(db.Integer)
    workout_days = db.Column(db.Integer)
    preferences = db.Column(db.String(45))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            "idUser": self.idUser,
            "nom": self.nom,
            "prenom": self.prenom,
            "email": self.email,
            "objectif": self.objectif,
            "sexe": self.sexe
        }

# Automatically create the table when the app starts
with app.app_context():
    try:
        db.create_all()
        print("Database tables created successfully.")
    except Exception as e:
        print(f"Error creating database tables: {e}")

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Flask server is running!'})

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()

        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 400

        user = User(
            nom=data['nom'],
            prenom=data['prenom'],
            email=data['email'],
            age=data.get('age'),
            taille=data.get('taille'),
            poids=data.get('poids'),
            objectif=data.get('objectif'),
            sexe=data.get('sexe'),
            meals_perday=data.get('meals_perday'),
            workout_days=data.get('workout_days'),
            preferences=data.get('preferences')
        )
        user.set_password(data['MotDePass'])

        db.session.add(user)
        db.session.commit()

        return jsonify({
            'message': 'User registered successfully',
            'user': user.to_dict()
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
    app.run(host='0.0.0.0', port=5000, debug=True)

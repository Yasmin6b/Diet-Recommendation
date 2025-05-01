from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from models.meal_model import Meal
from models.user_model import User


db = SQLAlchemy()

class RecommendedMeal(db.Model):
    __tablename__ = 'recommende_meals'

    idrecom = db.Column(db.Integer, primary_key=True)
    recommended_at = db.Column(db.DateTime, default=datetime.utcnow)
    idUser = db.Column(db.Integer, db.ForeignKey('user.idUser'), nullable=False)
    RecipeId = db.Column(db.Integer, db.ForeignKey('meal.RecipeId'), nullable=False)

    user = db.relationship('User', backref=db.backref('recommended_meals', lazy=True))
    meal = db.relationship('Meal', backref=db.backref('recommended_in', lazy=True))

    def to_dict(self):
        return {
            "idrecom": self.idrecom,
            "recommended_at": self.recommended_at.strftime('%Y-%m-%d %H:%M:%S'),
            "idUser": self.idUser,
            "RecipeId": self.RecipeId
        }

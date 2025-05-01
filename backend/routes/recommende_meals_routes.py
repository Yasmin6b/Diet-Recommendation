from flask import Blueprint, jsonify, request
from models.recommende_meals_model import RecommendedMeal, db
from models.meal_model import Meal

recommende_meals_bp = Blueprint('recommende_meals', __name__)

@recommende_meals_bp.route('/user/<int:user_id>/recommended-meals', methods=['GET'])
def get_user_recommended_meals(user_id):
    try:
        # Get recommended meals for the user
        recommendations = RecommendedMeal.query.filter_by(idUser=user_id).all()
        if not recommendations:
            return jsonify({'message': 'No recommendations found for this user'}), 404

        # Extract meal info for each recommended recipe
        meals = []
        for rec in recommendations:
            meal = Meal.query.filter_by(RecipeId=rec.RecipeId).first()
            if meal:
                meals.append(meal.to_dict())

        return jsonify({"recommended_meals": meals}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
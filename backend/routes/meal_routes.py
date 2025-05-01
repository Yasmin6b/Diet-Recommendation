from flask import Blueprint, request, jsonify
from models.meal_model import Meal, db

meal_bp = Blueprint('meal_routes', __name__)

@meal_bp.route('/meals', methods=['GET'])
def get_meals():
    try:
        meals = Meal.query.all()
        return jsonify({"meals": [meal.to_dict() for meal in meals]}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@meal_bp.route('/meal/<int:id>', methods=['GET'])
def get_meal_by_id(id):
    try:
        meal = Meal.query.get(id)
        if not meal:
            return jsonify({'error': 'Meal not found'}), 404
        return jsonify(meal.to_dict()), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@meal_bp.route('/meal', methods=['POST'])
def create_meal():
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('NameR'):
            return jsonify({'error': 'NameR is required'}), 400
            
        # Get the maximum RecipeId and increment by 1
        max_id = db.session.query(db.func.max(Meal.RecipeId)).scalar()
        next_id = (max_id or 0) + 1
        
        new_meal = Meal(
            RecipeId=next_id,
            NameR=data.get('NameR'),
            CookTime=data.get('CookTime'),
            PrepTime=data.get('PrepTime'),
            TotalTime=data.get('TotalTime'),
            RecipeIngredientParts=data.get('RecipeIngredientParts'),
            Calories=float(data.get('Calories', 0)),
            FatContent=float(data.get('FatContent', 0)),
            SaturatedFatContent=float(data.get('SaturatedFatContent', 0)),
            CholesterolContent=float(data.get('CholesterolContent', 0)),
            SodiumContent=float(data.get('SodiumContent', 0)),
            CarbohydrateContent=float(data.get('CarbohydrateContent', 0)),
            FiberContent=float(data.get('FiberContent', 0)),
            SugarContent=float(data.get('SugarContent', 0)),
            ProteinContent=float(data.get('ProteinContent', 0)),
            RecipeInstructions=data.get('RecipeInstructions')
        )
        db.session.add(new_meal)
        db.session.commit()
        return jsonify({'message': 'Meal created successfully', 'meal': new_meal.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@meal_bp.route('/meal/<int:id>', methods=['DELETE'])
def delete_meal(id):
    try:
        meal = Meal.query.get(id)
        if not meal:
            return jsonify({'error': 'Meal not found'}), 404
        db.session.delete(meal)
        db.session.commit()
        return jsonify({'message': 'Meal deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

from flask_sqlalchemy import SQLAlchemy

# Create a db instance without initializing it
db = SQLAlchemy()

class Meal(db.Model):
    __tablename__ = 'meal'

    RecipeId = db.Column(db.Integer, primary_key=True, autoincrement=True, server_default=db.text('NULL'))
    NameR = db.Column(db.String(255), nullable=False)
    CookTime = db.Column(db.String(50))
    PrepTime = db.Column(db.String(50))
    TotalTime = db.Column(db.String(50))
    RecipeIngredientParts = db.Column(db.Text)
    Calories = db.Column(db.Float)
    FatContent = db.Column(db.Float)
    SaturatedFatContent = db.Column(db.Float)
    CholesterolContent = db.Column(db.Float)
    SodiumContent = db.Column(db.Float)
    CarbohydrateContent = db.Column(db.Float)
    FiberContent = db.Column(db.Float)
    SugarContent = db.Column(db.Float)
    ProteinContent = db.Column(db.Float)
    RecipeInstructions = db.Column(db.Text)

    def to_dict(self):
        return {
            "RecipeId": self.RecipeId,
            "NameR": self.NameR,
            "CookTime": self.CookTime,
            "PrepTime": self.PrepTime,
            "TotalTime": self.TotalTime,
            "RecipeIngredientParts": self.RecipeIngredientParts,
            "Calories": self.Calories,
            "FatContent": self.FatContent,
            "SaturatedFatContent": self.SaturatedFatContent,
            "CholesterolContent": self.CholesterolContent,
            "SodiumContent": self.SodiumContent,
            "CarbohydrateContent": self.CarbohydrateContent,
            "FiberContent": self.FiberContent,
            "SugarContent": self.SugarContent,
            "ProteinContent": self.ProteinContent,
            "RecipeInstructions": self.RecipeInstructions
        }

if __name__ == "__main__":
    with app.app_context():
        try:
            # Try to query the first meal
            meal = Meal.query.first()
            if meal:
                print("Successfully retrieved meal:")
                print(meal.to_dict())
            else:
                print("No meals found in the database")
        except Exception as e:
            print(f"Error: {str(e)}")

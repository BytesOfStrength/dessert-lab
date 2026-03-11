function RecipeDetail({ meal }) {
  if (!meal) return null;
  return (
    <div className="recipe-content">
      <img
        src={meal.strMealThumb}
        alt={`A finished serving of ${meal.strMeal}`}
        className="modal-img"
      />
      <h2>{meal.strMeal}</h2>
      <div className="recipe-details">
        <h3>Ingredients:</h3>
        <ul className="ingredient-list">
          {/* the Array length is chosen due to the API's data which limits each recipe to 20 ingredients and measurements*/}
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = meal[`strIngredient${i + 1}`];
            const measure = meal[`strMeasure${i + 1}`];
            return ingredient ? (
              <li key={`${meal.idMeal}-ingredient-${i}`}>
                {measure}&nbsp;
                {ingredient}
              </li>
            ) : null;
          })}
        </ul>

        <h3>Instructions:</h3>
        <p className="instructions-text">{meal.strInstructions}</p>
      </div>
    </div>
  );
}
export default RecipeDetail;

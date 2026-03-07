import { useState } from 'react';
import DessertSearch from '../features/DessertSearch.jsx';
import DessertCard from '../features/DessertCard.jsx';
import RecipeDetail from '../shared/RecipeDetail';
import Modal from '../shared/Modal.jsx';
import styles from '../features/DessertCard.module.css';

function Home({
  baseUrl,
  favorites,
  toggleFavorite,
  getDetails,
  meals,
  setMeals,
  lastSearch,
  setLastSearch,
  error,
  setError,
}) {
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(meals.length > 0);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const FILTER_URL = `${baseUrl}/filter.php?c=Dessert`;

  const handleSearch = async (searchTerm) => {
    const userInput = searchTerm.toLowerCase().trim();

    setError('');
    if (!userInput) {
      setError(`Please enter an ingredient to search.`);
      setHasSearched(false);

      return;
    }
    if (userInput.length < 3) {
      setError(`Please enter at least 3 characters.`);
      setHasSearched(false);
      //why is setMeals set to an empty array for this error messaage and not for !userInput
      setMeals([]);
      return;
    }
    setLoading(true);
    setHasSearched(true);
    setLastSearch(searchTerm);

    try {
      const response = await fetch(FILTER_URL);
      const data = await response.json();

      if (data.meals) {
        const filteredResults = data.meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(userInput)
        );
        setMeals(filteredResults);
      } else {
        setMeals([]);
      }
    } catch (err) {
      setError(`Something went wrong with the search`);
    } finally {
      setLoading(false);
    }
  };
  const handleViewDetails = async (idMeal) => {
    const details = await getDetails(idMeal);
    if (details) {
      setSelectedMeal(details);
    }
  };
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Dessert Lab Search</h1>
        <p>Enter an ingredient to find recipes!</p>
        <p>Saved recipes will be added to your personal lab collection page.</p>
      </header>
      <DessertSearch onSearch={handleSearch} error={error} />
      <section className="results-section">
        {loading && <p className="loading-text">Scanning the Lab...</p>}
        {!loading && hasSearched && meals.length === 0 && (
          <div className="no-results">
            <p>No recipes found for "{lastSearch}". Try another entry!</p>
          </div>
        )}
        <div className={styles.dessertGrid}>
          {meals.map((meal) => (
            <DessertCard
              key={meal.idMeal}
              meal={meal}
              onDetails={handleViewDetails}
              onFavorite={toggleFavorite}
              isFav={favorites.some((f) => f.idMeal === meal.idMeal)}
            />
          ))}
        </div>
      </section>
      <Modal isOpen={!!selectedMeal} onClose={() => setSelectedMeal(null)}>
        {selectedMeal && <RecipeDetail meal={selectedMeal} />}
         {/*<div className="recipe-content">
            <img
              src={selectedMeal.strMealThumb}
              alt={`A finished serving of ${selectedMeal.strMeal}`}
              className="modal-img"
            />
            <h2>{selectedMeal.strMeal}</h2>
            <div className="recipe-details">
              <h3>Ingredients:</h3>
              <ul className="ingredient-list">
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = selectedMeal[`strIngredient${i + 1}`];
                  const measure = selectedMeal[`strMeasure${i + 1}`];
                  return ingredient ? (
                    <li key={i}>
                      {measure}
                      {ingredient}
                    </li>
                  ) : null;
                })}
              </ul>
              <h3>Instructions:</h3>
              <p className="instructions-text">
                {selectedMeal.strInstructions}
              </p>
            </div>
          </div>
        )}*/}
      </Modal>
      {favorites.length > 0 && (
        <div className="lab-status-bar">
          <p>Lab Collection: {favorites.length} recipes saved</p>
        </div>
      )}
    </div>
  );
}
export default Home;

import { useState } from 'react';
import DessertCard from '../features/DessertCard';
import RecipeDetail from '../shared/RecipeDetail';
import Modal from '../shared/Modal';
import styles from './DessertMaker.module.css';

function DessertMaker({
  favorites,
  toggleFavorite,
  clearAll,
  getDetails,
  updateComment,
  error,
  setError,
}) {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleViewDetails = async (idMeal) => {
    setError('');
    const details = await getDetails(idMeal);
    if (details) setSelectedMeal(details);
  };
  return (
    <div className={styles.makerPage}>
      <header className={styles.header}>
        <h1>My Personal Lab</h1>
        <p>Review your saved dessert research and manage your collection.</p>
        {error && (
          <p className={styles.errorMessage} role="alert">
            {error}
          </p>
        )}
        {favorites.length > 0 && (
          <button className={styles.clearBtn} onClick={clearAll}>
            Reset Lab Collection
          </button>
        )}
      </header>
      <section className={styles.collection}>
        {favorites.length === 0 ? (
          <div className={styles.emptyState}>
            <p>
              Your Lab is Empty! Visit the Home page to research some recipes
            </p>
          </div>
        ) : (
          <div className={styles.recipeList}>
            {favorites.map((meal) => (
              <div key={meal.idMeal} className={styles.labEntry}>
                <DessertCard
                  key={meal.idMeal}
                  meal={meal}
                  isFav={true}
                  onFavorite={toggleFavorite}
                  onDetails={handleViewDetails}
                />
                <div className={styles.noteSection}>
                  <label htmlFor={`notes-${meal.idMeal}`}>
                    <h4>Lab Notes</h4>
                  </label>
                  {editingId === meal.idMeal ? (
                    <div className={styles.editMode}>
                      <textarea
                        id={`notes-${meal.idMeal}`}
                        name="recipeNotes"
                        value={meal.notes || ''}
                        onChange={(e) =>
                          updateComment(meal.idMeal, e.target.value)
                        }
                        placeholder="Enter your comments"
                        autoFocus
                      />
                      <button
                        className={styles.saveBtn}
                        onClick={() => setEditingId(null)}
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <div className={styles.viewMode}>
                      <p className={styles.noteText}>
                        {meal.notes ? meal.notes : <em> No notes added yet</em>}
                      </p>
                      <div className={styles.noteActions}>
                        <button
                          className={styles.editBtn}
                          onClick={() => setEditingId(meal.idMeal)}
                        >
                          {meal.notes ? 'Edit Note' : 'Add Note'}
                        </button>
                        {meal.notes && (
                          <button
                            className={styles.deleteBtn}
                            onClick={() => updateComment(meal.idMeal, '')}
                          >
                            Delete Note
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {favorites.length > 0 && (
        <aside className={styles.statusPanel}>
          <h3>Lab Prep Checklist</h3>.
          <ul className={styles.checklist}>
            <li>
              <input
                type="checkbox"
                id="prep-ingredients"
                name="prep-ingredients"
              />
              <label htmlFor="prep-ingredients">Ingredients Sourced</label>
            </li>
            <li>
              <input type="checkbox" id="prep-tools" name="prep-tools" />
              <label htmlFor="prep-tools">Equipment Ready</label>
            </li>
          </ul>
        </aside>
      )}
      <Modal isOpen={!!selectedMeal} onClose={() => setSelectedMeal(null)}>
        {selectedMeal && <RecipeDetail meal={selectedMeal} />}
      </Modal>
    </div>
  );
}
export default DessertMaker;

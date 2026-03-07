import styles from './DessertCard.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function DessertCard({ meal, onDetails, onFavorite, isFav }) {
  return (
    <div className={styles.dessertCard}>
      <img
        src={meal.strMealThumb}
        alt={`A prepared serving of ${meal.strMeal}`}
      />
      <div className={styles.cardInfo}>
        <h3>{meal.strMeal}</h3>
        <div className={styles.cardButtons}>
          <button onClick={() => onDetails(meal.idMeal)}>View Recipe</button>
          <button
            className={isFav ? styles.favActive : ''}
            onClick={() => onFavorite(meal)}
          >
            <span>
              {isFav ? <FaHeart color="red" /> : <FaRegHeart />}
              {isFav ? 'Saved' : 'Favorite'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default DessertCard;

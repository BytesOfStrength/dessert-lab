import { useState } from 'react';
import styles from './DessertSearch.module.css';

function DessertSearch({ onSearch, error }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };
  return (
    <section className="search-feature">
      <form onSubmit={handleSubmit} className={styles.searchBox}>
        <label htmlFor="ingredient-input">Search Ingredient:</label>
        <input
          className={styles.searchInput}
          id="ingredient-input"
          name="ingredient-input"
          type="text"
          placeholder="e.g., chocolate"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.searchBtn}>
          Search Lab
        </button>
      </form>
      {error && <p className="validation-error">{error}</p>}
    </section>
  );
}
export default DessertSearch;

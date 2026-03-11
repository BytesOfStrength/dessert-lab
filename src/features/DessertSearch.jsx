import { useState } from 'react';
import styles from './DessertSearch.module.css';

function DessertSearch({ onSearch, error, disabled }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };
  return (
    <section className="search-feature">
      <form
        id="dessert-search-form"
        onSubmit={handleSubmit}
        className={styles.searchBox}
        role="search"
      >
        <label htmlFor="ingredient-input">Search Ingredient:</label>
        <input
          className={styles.searchInput}
          id="ingredient-input"
          name="ingredient-input"
          type="text"
          placeholder="e.g., chocolate"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled} className={styles.searchBtn}>
          Search Lab
        </button>
      </form>
      {error && <p className="validation-error">{error}</p>}
    </section>
  );
}
export default DessertSearch;

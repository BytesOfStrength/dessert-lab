import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';

import Navbar from './shared/Navbar';
import Layout from './shared/Layout';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https//www.themealdb.com/api/json/v1/${API_KEY}`;

function App() {
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('lab-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [detailCache, setDetailCache] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('lab-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((recipe) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.find((fav) => fav.idMeal === recipe.idMeal);
      if (isAlreadyFav) {
        return prev.filter((fav) => fav.idMeal !== recipe.idMeal);
      }
      if (prev.length >= 5) {
        alert(
          'Lab Collection at Capacity! You can only save up to 5 recipes at a time.'
        );
        return prev;
      }
      return [...prev, { ...recipe, notes: '' }];
    });
  }, []);

  const updateComment = (idMeal, newComment) => {
    setFavorites((prev)=>
      prev.map((fav)=>
      fav.idMeal === idMeal ? {...fav,notes: newComment}: fav));
  };

  const getDetails = useCallback (
    async (idMeal) =>{
      setError('');
      if(detailCache[idMeal]) {
        return detailCache [idMeal];
      }
      const LOOKUP_URL = `${BASE_URL}/lookup.php?=${idMeal}`;
      try { 
        const response= await fetch(LOOKUP_URL);
        const data = await response.json();
        if(!data.meals) {
          throw new Error ('No recipe data found');
        }
        const details = data.meals[0];
        setDetailCache((prev)=>({...prev, [idMeal]:details}));
        return details;

      }catch (error){
        setError('Problem loading recipe details.');
        return null;

      }
    },[detailCache]
  );
    const clearAllFavorites = ()=> {
      if (window.confirm ('Are you sure you want to reset your lab?')) {
        setFavorites([]);
      }
    };

  return (
    <div className="app-wrapper">
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<DessertMaker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

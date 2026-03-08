import {Routes, Route} from "react-router";
import {useState, useEffect } from "react";


import Navbar from "./shared/Navbar";
import Layout from "./shared/Layout";
import './App.css';


function App() {
  const[error,setError]=useState('');
  const[favorites,setFavorites]=useState(()=>{
    const saved= localStorage.getItem('lab-favorites');
    return saved ? JSON.parse(saved) : [];
  })
  const[detailCache,setDetailCache]=useState({});
  const[searchResults, setSearchResults]=useState ([]);
  const[lastSearchTerm, setLastSearchTerm]=useState('');

  useEffect(()=>{
    localStorage.setItem("lab-favorites",JSON.stringify(favorites));
  },[favorites]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/create"
            element={
              <DessertMaker />
            }
          />
          <Route
           path ="*"
           element ={
            <NotFound />
           }
          />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;

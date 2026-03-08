import {Routes, Route} from "react-router";


import Navbar from "./shared/Navbar";
import Layout from "./shared/Layout";
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Layout />
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

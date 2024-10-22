import React from'react';
import { HomePages } from './home/HomePages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Switch yerine Routes kullan
import Header from "./components/header/header";
import Footer from './components/header/footer/Footer';
import SinglePage from './components/header/watch/SinglePage';
import "./App.css"

function App() {
  return( 
    <> 
      <Router>
        <Header />
        <Routes> 
          <Route path='/' element={<HomePages />} /> 
          <Route path='/SinglePage/:id' element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

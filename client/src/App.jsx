import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardBook from './components/CardBook';
import CardRomance from './components/CardRomance';
import CardMisterio from './components/CardMisterio';
import CardTerror from './components/CardTerror';
import CardFiccao from './components/CardFiccao';
import CardFantasia from './components/CardFantasia';
import bookData from '../json/books.json';
import './App.css';
import Register from './Register';
import Login from './Login';


function App() {
  const [filterParam, setFilterParam] = useState("");
  const [livroEncontrado, setLivroEncontrado] = useState(null);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(bookData);
  }, []);

  return (
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={<CardBook filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route
            path="/romance"
            element={<CardRomance filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route
            path="/misterio"
            element={<CardMisterio filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route
            path="/terror"
            element={<CardTerror filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route
            path="/ficcao-cientifica"
            element={<CardFiccao filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route
            path="/fantasia"
            element={<CardFantasia filterParam={filterParam} livroEncontrado={livroEncontrado} livros={livros} />}
          />
          <Route path="/register" element={<Register />} />  
          <Route path="/" element={<Login />} /> 
        </Routes>
      </Router>
 
  );
}

export default App;

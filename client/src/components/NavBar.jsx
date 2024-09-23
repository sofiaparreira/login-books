// NavBar.jsx
import React, { useState, useEffect } from 'react';
import BtnCategoria from './BtnCategoria';
import Search from './Search';
import Filter from './Filter';
import bookData from '../../json/books.json';

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [livroEncontrado, setLivroEncontrado] = useState(null);
  const [livros, setLivros] = useState([]);
  const [filterParam, setFilterParam] = useState("");



  useEffect(() => {
    setLivros(bookData);
  }, []);


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);
    console.log("Termo de busca:", term);
  
    if (term !== "") {
      const livro = livros.find((livro) =>
        livro.nome.toLowerCase().includes(term.toLowerCase())
      );
      console.log("Livro encontrado:", livro);
      setLivroEncontrado(livro);
    } else {
      setLivroEncontrado(null);
    }
  };
  

  return (
    <div className='bg-gray-900 text-white py-16 pb-40'>
      <div>
        <div className='flex gap-8 xl:w-2/3 w-10/12 mx-auto'>
          <BtnCategoria categoria={'Todos'} to="/dashboard" />
          <BtnCategoria categoria={'Romance'} to="/romance" />
          <BtnCategoria categoria={'Mistério'} to="/misterio" />
          <BtnCategoria categoria={'Ficção Científica'} to="/ficcao-cientifica" />
          <BtnCategoria categoria={'Fantasia'} to="/fantasia" />
          <BtnCategoria categoria={'Terror'} to="/terror" />
        </div>
        <div className='grid grid-cols-4 gap-8 mt-8 mb-16 mx-64'>
          <div className='col-span-3'>
            <Search onSearch={handleSearch} />
          </div>
          <div className='col-span-1'>
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;


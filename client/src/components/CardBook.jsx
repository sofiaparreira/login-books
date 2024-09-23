import React, { useState } from "react";
import booksData from "../../json/books.json";
import BtnCategoria from "./BtnCategoria";
import Search from "./Search";
import Filter from "./Filter";
import NavBar from "./NavBar";

const CardBook = ({ filterParam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const getFilteredLivros = () => {
    return booksData.slice().sort((a, b) => {
      if (filterParam === "A-Z") {
        return a.nome.localeCompare(b.nome);
      } else if (filterParam === "Z-A") {
        return b.nome.localeCompare(a.nome);
      } else {
        return 0;
      }
    });
  };


  const filteredBooks = filterParam ? getFilteredLivros() : booksData;

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div>
    <NavBar />

      <div className="grid grid-cols-3 justify-around mx-auto bg-gray-900 text-gray-100">
        {filteredBooks.map((book, id) => (
          <div
            className="bg-gray-800 hover:bg-gray-950 transition-all duration-300 hover:scale-102 py-4 px-4 rounded-md flex justify-left mx-8 mb-8 gap-4 cursor-pointer"
            key={id}
            onClick={() => handleCardClick(book)}
          >
            <img className="rounded w-40" src={book.capa} alt="" />
            <div>
              <h1 className="text-xl font-bold mb-8 text-center mt-4">
                {book.nome}
              </h1>

              <p className="py-1.5">
                <span className="font-medium pr-2">Editora:</span>
                {book.editora}
              </p>
              <p className="py-1.5">
                <span className="font-medium pr-2">Autor:</span>
                {book.autor}
              </p>

              <p className="py-1.5">
                <span className="font-medium pr-2">Categoria:</span>
                {book.categoria}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedBook.nome}</h2>
            <p className="py-1.5">
              <span className="font-medium pr-2">Onde comprar:</span>
              {selectedBook.ondeComprar}
            </p>
            <p className="py-1.5">
              <span className="font-medium pr-2">Valor:</span>
              {selectedBook.valor}
            </p>
            <button
              className="mt-4 bg-blue-800 text-white py-1 px-8 rounded-md"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBook;

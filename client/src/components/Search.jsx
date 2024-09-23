import React from 'react';

const Search = ({ value, onSearch }) => {
  return (
    <input
      placeholder='Pesquise pelo nome do livro ou autor'
      className='w-full py-2 px-4 rounded-lg outline text-white bg-gray-700 outline-none'
      type="search"
      onChange={onSearch}
      value={value}
    />
  );
}

export default Search;

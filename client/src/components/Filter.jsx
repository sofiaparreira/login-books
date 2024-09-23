import React from 'react';

function Filter({ filterParam, setFilterParam }) {
  return (
   
      <select className='text-white  bg-gray-700 w-full px-5 rounded-lg outline-none py-2'
        value={filterParam}
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}
      >
        <option disabled selected value="">Filtrar Livro</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

  );
}

export default Filter;


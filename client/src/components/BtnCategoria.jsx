import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BtnCategoria = ({ categoria, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;


  const btnClasses = 'rounded-lg w-48 text-center py-2 mb-16 shadow-lg transition duration-150 cursor-pointer';
  const defaultBgClasses = 'bg-gray-800 hover:bg-blue-800';
  const activeBgClasses = 'bg-blue-800';

  const combinedClasses = `${btnClasses} ${isActive ? activeBgClasses : defaultBgClasses}`;

  return (
    <Link to={to} className={combinedClasses}>
      {categoria}
    </Link>
  );
}

export default BtnCategoria;

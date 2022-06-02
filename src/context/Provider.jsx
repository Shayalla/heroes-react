import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getAllCharacter } from '../services/getCharacter';

function Provider({ children }) {
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  
  const getHeroes = async () => {
    const heroes = await getAllCharacter();
    setChar(heroes);
    setLoading(false);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const states = {
    char,
    setChar,
    loading,
    search,
    setSearch,
  };

  return (
    <Context.Provider value={states}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './Search.css';

function Search() {
  const { loading, setSearch, char } = useContext(Context);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const pubs = char.map((e) => e.biography.publisher)
    const uniquePublishers = [...new Set(pubs)];
    
    uniquePublishers.splice(22, 1);
    uniquePublishers.splice(16, 1);
    setPublishers(uniquePublishers);
  }, [char])

  const handleChange = ({ target: { name, value } }) => setSearch({ [name]: value })
  console.log(publishers);
  return (
    <>
      <input type="text" name="name" onChange={(e) => handleChange(e)} />
      <select
        name="publisher"
        onChange={(e) => handleChange(e)}
      >
        <option value="" disabled selected>Procure por editora</option>
        {loading ? <option>Carregando...</option> :
          publishers.map((pub, index) => (
            <option key={index} value={pub}>{pub}</option>
          ))
        }
      </select>
      <button type="button" onClick={ () => window.location.reload() }>Limpar</button>
    </>
  )
}

export default Search;
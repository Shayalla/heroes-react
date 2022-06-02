import React, { useContext } from 'react';
import Context from '../../context/Context';

function Search() {
  const { char, loading, setSearch } = useContext(Context);

  const publishers = char.map((e) => e.biography.publisher);
  const uniquePublishers = [...new Set(publishers)]
  
  const handleChange = ({ target: { name, value } }) => setSearch({ [name]: value })
  return (
    <>
      <input type="text" name="name" onChange={(e) => handleChange(e)} />
      <select
        name="publisher"
        onChange={(e) => handleChange(e)}
      >
        <option value="" disabled selected>Procure por editora</option>
        {loading ? <option>Carregando...</option> :
          uniquePublishers.map((pub, index) => (
            <option key={index} value={pub}>{pub}</option>
          ))
        }
      </select>
    </>
  )
}

export default Search;
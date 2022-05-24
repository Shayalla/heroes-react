import React, { useEffect, useState } from 'react';
import getAllCharacter from '../services/getCharacter';

function Home() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const hero = await getAllCharacter();
      setChar(hero);
    }
    getHeroes();
  }, []);
  console.log(char);
  return (
    <>
      <ul>
        {char.map((char) => (
          <li key={char.id}>
            <img src={ char.images.sm } alt="" />
            {char.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home;
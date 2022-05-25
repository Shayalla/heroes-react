import React, { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard/HeroCard';
import getAllCharacter from '../services/getCharacter';
import './Home.css';

function Home() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const getHeroes = async () => {
      const hero = await getAllCharacter();
      setChar(hero);
    }
    getHeroes();
  }, []);
  return (
    <>
      <ul>
        {char.map(({ id, name, images }) => (
          <HeroCard key={id} name={name} images={images} />
        ))}
      </ul>
    </>
  )
}

export default Home;
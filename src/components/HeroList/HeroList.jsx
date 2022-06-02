import React, { useContext, useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard';
import Context from '../../context/Context';

function HeroList() {
  const { char, setChar, search, loading } = useContext(Context);

  useEffect(() => {
    if (search.name){
      const hero = char.filter(({name}) => name.includes(search.name));
      setChar(hero);
    }
    if (search.publisher) {
      const hero = char.filter(({ biography: { publisher } }) => publisher === search.publisher);
      setChar(hero);
    }
    console.log('char', char);
    console.log('search', search);
  }, [search, setChar])

  return loading ? <p>Carregando...</p> :(
    <ul>
      {
        char.map(({ id, name, images }) => (
          <HeroCard key={id} name={name} images={images} />
        ))}
    </ul>
  )
}

export default HeroList;
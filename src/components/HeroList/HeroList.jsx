import React, { useContext, useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard';
import Context from '../../context/Context';

function HeroList() {
  const { char, setChar, search } = useContext(Context);

  useEffect(() => {
    const hero = char.filter(({name}) => name.includes(search.name))
    setChar(hero)
    console.log('char', char);
    console.log('search', );
  }, [search, setChar])

  return (
    <ul>
      {
        char.map(({ id, name, images }) => (
          <HeroCard key={id} name={name} images={images} />
        ))}
    </ul>
  )
}

export default HeroList;
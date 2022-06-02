import React from 'react';
import HeroList from '../components/HeroList/HeroList';
import Search from '../components/Search/Search';
import './Home.css';

function Home() {
  return (
    <>
      <Search />
      <HeroList />
    </>
  )
}

export default Home;
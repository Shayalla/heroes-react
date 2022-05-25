import React from 'react';
import PropTypes from 'prop-types';
import './HeroCard.css';

import './animacoes.css';
import './variaveis.css';

function HeroCard({ name, images }) {
  return (
    <li>
      <img src={ images.sm } alt="" />
      {name}
    </li>
  )
}

HeroCard.propTypes = {
  name: PropTypes.any.isRequired,
  images: PropTypes.any.isRequired
}

export default HeroCard;

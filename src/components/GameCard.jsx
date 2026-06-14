import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ title, shortname, cover, src, description }) => (
  <article className="card">
    <img src={cover} />
    <div className="d-flex justify-between align-center">
      <h3>{title}</h3>
      <Link className='btn' to={`/play/${shortname}`}>Play</Link>
    </div>
    {description && (<p>{description}</p>)}
  </article>
);

export default GameCard;
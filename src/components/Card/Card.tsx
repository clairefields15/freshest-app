import React from 'react';
import './Card.css';
import veggies from '../../images/shelley-pauls.jpg';

interface CardProps {
  id: number;
  distance: number;
  name: string;
  findSelectedMarket: (marketID: number) => void;
}

export const Card: React.FC<CardProps> = ({ id, name, distance, findSelectedMarket }) => {
  return (
    <article className='market-card' id={`${id}`} onClick={() => findSelectedMarket(id)}>
      <div className='veggie-container'>
        <img src={veggies} alt='fresh produce' className='veggie-img' />
      </div>
      <div className='market-info'>
        <p>{name}</p>
        <p>{distance} miles away</p>
      </div>
    </article>
  );
};

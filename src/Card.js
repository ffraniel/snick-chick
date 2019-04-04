import React from 'react';
import './Card.css';

const Card = ({ chicken, highlighted, changeCurrent }) => {
  const { breed, img, details } = chicken;
  const highlightedClass = highlighted ? 'Card-Highlighted' : null;

  return (
    <div className={`Chicken-Card ${highlightedClass}`} onClick={()=>{changeCurrent(chicken.index)}} >
      <img className="Chicken-Image" alt={`Chicken of the ${breed} variety.`} src={img} />
      <h1 className="Chicken-Name">{breed}</h1>
      <p className="Chicken-Details">{details}</p>
    </div>
  )
};

export default Card;
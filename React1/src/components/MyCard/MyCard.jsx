// components/MyCard.jsx
import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description }) => {
  return (
    <div className="my-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Tags text="Adoptable" color="success" />
    </div>
  );
};

export default MyCard;
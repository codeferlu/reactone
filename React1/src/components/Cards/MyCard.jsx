import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Tags text="Etiqueta 1" color="primary" />
        <Tags text="Etiqueta 2" color="secondary" />
        {/* Agrega más etiquetas según sea necesario */}
      </div>
    </div>
  );
};

export default MyCard;
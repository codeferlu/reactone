// App.jsx
import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />

      {/* Renderizar varios MyCard */}
      <MyCard
        imageUrl="URL_DE_LA_IMAGEN"
        name="Nombre del Perrito 1"
        description="Descripción del Perrito 1"
      />

      <MyCard
        imageUrl="URL_DE_LA_IMAGEN"
        name="Nombre del Perrito 2"
        description="Descripción del Perrito 2"
      />

      {/* Agregar más MyCard según sea necesario */}

      <Footer />
    </div>
  );
};

export default App;
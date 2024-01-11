import React from 'react';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />

      <div className="container">
        {/* Agrega varios componentes MyCard con diferentes props */}
        <MyCard imageUrl="url_imagen_1" name="Perrito 1" description="Descripción del perrito 1" />
        <MyCard imageUrl="url_imagen_2" name="Perrito 2" description="Descripción del perrito 2" />
        {/* Agrega más tarjetas según sea necesario */}
      </div>

      <Footer />
    </div>
  );
};

export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Belowtext from './Belowtext.jsx';
import Carousel from './Carousel.jsx';
import Card from './Card.jsx';
import OurProducts from './OurProducts.jsx';
import OurClients from './OurClients.jsx';
const Home = () => {
  return (
    <div>
    <Carousel/>
    <Belowtext/>
    <Card/>
    <OurProducts/>
    <OurClients/>
    </div>
  );
};

export default Home;

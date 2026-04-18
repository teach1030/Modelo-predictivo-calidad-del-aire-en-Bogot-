
import React from 'react';
import { Us } from './../components/Us'; // Así está bien
import { Nav } from '../components/Nav';

const UsView = () => {
  return (
    <>
      <Nav />
      <Us />
    </>
  );
};

export { UsView }
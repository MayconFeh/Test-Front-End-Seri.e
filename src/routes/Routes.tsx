import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/index';
// import CharacterPage from '../pages/CharacterPage/CharacterPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/character/:id" element={<CharacterPage />} /> */}
      {/* Outras rotas podem ser adicionadas aqui */}
    </Routes>
  );
};

export default AppRoutes;

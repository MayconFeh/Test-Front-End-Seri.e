import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/index';
import { CharacterPage } from '../pages/CharacterPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<CharacterPage />} />
    </Routes>
  );
};

export default AppRoutes;

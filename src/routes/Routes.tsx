
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/index';
import { CharacterPage } from '../pages/CharacterPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<CharacterPage />} />
    </Routes>
  );
};

export default AppRoutes;

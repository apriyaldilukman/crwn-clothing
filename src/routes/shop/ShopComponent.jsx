import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categoriesPreview/CategoriesPreviewComponent';
import Category from '../category/CategoryComponent';


const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
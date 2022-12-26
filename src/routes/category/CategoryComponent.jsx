import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';

import ProductCard from '../../components/ProductCard/ProductCardComponent';

import { CategoryContainer, Title } from './CategoryStyles'

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <Fragment>
     <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
      { products && 
        products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CategoryContainer>
    </Fragment>
  );
};

export default Category;
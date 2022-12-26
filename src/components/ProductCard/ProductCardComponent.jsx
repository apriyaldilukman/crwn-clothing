import { useContext  } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../Buttons/ButtonComponent';
import { CartContext } from '../../contexts/CartContext';

import { ProductCardContainer, Footer, Name, Price } from './ProductCardStyles'


const ProductCard = ({ product }) => {
  const {name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)

  return (
  <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`} />
    <Footer>
    <Name>{name}</Name>
    <Price>{price}</Price>
    </Footer>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
  </ProductCardContainer>
  );
};

export default ProductCard;
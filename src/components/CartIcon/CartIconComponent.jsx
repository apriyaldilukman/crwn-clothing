import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import { ShoppingIcon, CartIconContainer, ItemCount} from './CartIconStyles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

return (
  <CartIconContainer onClick={toggleIsCartOpen}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount>{cartCount}</ItemCount>
  </CartIconContainer>
)
};

export default CartIcon;
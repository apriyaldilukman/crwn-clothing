import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/CartIcon/CartIconComponent";
import CartDropdown from "../../components/CartDropdown/CartDropdownComponent";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import {signOutUser} from "../../Utils/firebase/FirebaseUtils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer} from './NavigationStyles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
      <CrwnLogo className="logo"/>
        </LogoContainer>
       <NavLinks>
        <NavLink to='/shop'>
          SHOP
        </NavLink> 
         {currentUser ? ( 
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
              </NavLink> 
            ) : (
           <NavLink to='/auth'>
            SIGN IN 
          </NavLink>
          )}
        <CartIcon />
       </NavLinks>
       {isCartOpen &&<CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
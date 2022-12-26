import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/HomeComponent';
import Navigation from './routes/navigation/NavigationComponent';
import Authentication from './routes/authentication/AuthenticationComponent';
import Shop from './routes/shop/ShopComponent';
import Checkout from './routes/chekcout/CheckoutComponent';





const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

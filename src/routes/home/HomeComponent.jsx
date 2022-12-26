import { Outlet } from 'react-router-dom';

import Directory from '../../components/Directory/DirectoryComponent';

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet/>
    </div>
  ); 
};

export default Home;
import { Productlist } from './components/products';
import { Header } from './components/header';

import './App.scss';

const App = () => {
  return (
    <div className='homepage'>
      <Header />

      <Productlist />
    </div>
  );
};

export default App;

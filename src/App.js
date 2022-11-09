import './App.css';
import Carousels from './components/carousel/carousel';
import Menu from './components/menu/menu';
import Navbar from './components/navbar/navbar';
import Restaurants from './components/restaurants/restaurant';

function App() {
  return (
    <>
      <Navbar />
      <Carousels />
      <Menu />
      <Restaurants />
    </>
  );
}

export default App;

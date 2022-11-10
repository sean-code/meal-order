import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Order from './components/order/order';
import About from './components/about/about';


function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Order />
       <About />
    </>
  );
}

export default App;

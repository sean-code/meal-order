import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Order from './components/order/order';
import About from './components/about/about';
import Search from './components/search/search';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


{/* <Navbar />
<Home />
<Order />
<About /> */}
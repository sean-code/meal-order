import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Search from './components/search/search';
import searchBar from './components/search/search';

import Home from './components/home/home';

function App() {
  
  return (
    <div className="App">
      <Search/>
      
      {/* {data.map((res) => (
        <h1>{res.name.common}</h1>
      ))} */}
    </div>
  );
}

export default App;

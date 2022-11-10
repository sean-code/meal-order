import Footer from '../footer/footer';
import './home.css'
import SliderShow from './SliderShow';
import Menu from '../menu/menu';


function Home({setCart, cart, setWarning}){
    return(
        <div>
            <SliderShow/>
            <Menu cart={cart} setCart={setCart} setWarning={setWarning}/>
            <Footer />
    </div>
    )
}

export default Home;
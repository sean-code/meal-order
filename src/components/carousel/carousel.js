import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

function Carousels(){
    return(
        <div className='slideshow'>
            <Carousel infiniteloop autoPlay>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1655844356175-76b475c178af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3Vpc2luZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://prontorestaurant.co.ke/wp-content/uploads/2022/10/IMG_1371.jpg' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='../pics/food4.jpg' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://prontorestaurant.co.ke/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-26-at-12.20.12-PM.jpeg' alt='img1' />
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels;
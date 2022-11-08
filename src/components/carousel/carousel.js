import './carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

function Carousels(){
    return(
        <div>
            <h1>Hello</h1>
            <Carousel infiniteloop autoPlay>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1655844356175-76b475c178af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3Vpc2luZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1600555379885-08a02224726d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMG1lYWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFzYWduYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='img1' />
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels;
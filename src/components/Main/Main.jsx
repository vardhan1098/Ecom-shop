import React, { useContext } from 'react';
import { ProductContext } from '../../containers/Context';
import './Main.css';
import Carousel from '../../containers/Carousel';

import Shoppe1 from '../../assets/Shoppe1.avif';
import Shoppe2 from '../../assets/Shoppe2.avif';
import Shoppe3 from '../../assets/Shoppe3.avif';

const imageSet = [
    { id: 1, src: Shoppe1, alt: "Shoppe1" },
    { id: 2, src: Shoppe2, alt: "Shoppe2" },
    { id: 3, src: Shoppe3, alt: "Shoppe3" }
]

const Main = () => {
    const {products,allProducts} = useContext(ProductContext);

    const NewProducts = allProducts.slice(1,6);

    if(!products.length){
        return <div>Loading..</div>
    }
    return (
        <div>
            <>
            <Carousel images={imageSet}/>
            </>
       
        <div className='Card'>
           
            {
                products.map((item,index)=>(
                    <div key={index} className='Card-item'>
                        <h2>{item.title}</h2>
                        <img src={item.image}/>
                        {/* <p>{item.description}</p> */}
                        <h5>Price: ${item.price}</h5>
                    </div>
                ))
            }

        </div>
        <div className='Main-card'>
        {
            NewProducts.map((item,index)=>(
                <div className='Main' key={index}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt='item-image'/>
                    <h5>Price $:{item.price}</h5>
                </div>
            ))
        }
        </div>
        </div>
    );
};

export default Main;
import React, { useContext } from 'react';
import './Category.css';
import { ProductContext } from '../../containers/Context';

// womens Images..
import women1 from '../../assets/women1.avif';
import women2 from '../../assets/women2.avif';
import women3 from '../../assets/women3.avif';
import Carousel from '../../containers/Carousel';
// import kidsCarousel from '../../containers/kidsCarousel';

// Men..
import Men1 from '../../assets/Mens1.avif';
import Men2 from '../../assets/Mens2.avif';
import Men3 from '../../assets/Men3.avif';
import Men4 from '../../assets/Mens4.avif';



//Iimes..
import time1 from '../../assets/times1.avif';
import time2 from '../../assets/times2.avif';
import time3 from '../../assets/times3.avif';
import time4 from '../../assets/times4.avif';
//Decor

const Category = () => {
const {category} = useContext(ProductContext);

// women
const imagesNewSet = [
    { id: 1, src: women1, alt: "Shoppe1" },
    { id: 2, src: women2, alt: "Shoppe2" },
    { id: 3, src: women3, alt: "women3" }
]

// Mens
const imagesMens = [
    { id: 1, src: Men1, alt: "Shoppe1" },
    { id: 2, src: Men2, alt: "Shoppe2" },
    { id: 3, src: Men3, alt: "women3" },
    {id:4, src:Men4, alt:"Men4"}
]

//Times

const imagesTimes = [
    { id: 1, src: time1, alt: "Shoppe1" },
    { id: 2, src: time2, alt: "Shoppe2" },
    { id: 3, src: time3, alt: "women3" },
    {id:4,src: time4, alt:"Times4"}
]



if(!category.length){
    return <div>Loading...</div>
}
    return (
        <div>
            <div className='Times'>
            <span><h3> Timeless Tickers</h3></span>
            <>
            <Carousel images={imagesTimes}/>
            </>
           </div> 
           <div className='womens'>
            <span><h3>Women's Indian Wear</h3></span>
            <>
            <Carousel images={imagesNewSet}/>
            </>
           </div>
           <div className='Mens'>
            <span><h3>Men's Wear</h3></span>
            <>
            <Carousel images={imagesMens}/>
            </>
           </div>
        </div>
    );
};

export default Category;
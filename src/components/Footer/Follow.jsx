import React from 'react';
import './Follow.css';

import payment1 from '../../assets/masters_card.webp';
import payment2 from '../../assets/visa.webp';
import payment3 from '../../assets/rupay.webp';
import payment4 from '../../assets/american_express.webp';
import download1 from '../../assets/footer_appstore.png';
import download2 from '../../assets/footer_payment_paly_store_app.webp';

import verify1 from '../../assets/dss.webp';
import verify2 from '../../assets/entrust.webp';
import verify3 from '../../assets/master.webp';
import verify4 from '../../assets/visa_verified.webp';

import Truck from '../../assets/Truck.png';
import Swap from '../../assets/Swap.png';
import measuring from '../../assets/measuring.png';
import click_and_collect from '../../assets/click_and_collect.png'

import x from '../../assets/x.png';
import instagram from '../../assets/instagram.avif';

import exchange1 from '../../assets/easy_exchange.svg';
import exchange2 from '../../assets/express_pickup.svg';
import exchange3 from '../../assets/secure_payment.svg';
import exchange4 from '../../assets/authentic_products.svg';




const Follow = () => {
    return (
        <div className='contain'>
           <span>Our Unique <h2>Offerings</h2> </span>
           <div className='ship'>
            <h4><img src={measuring} alt='measuring'/>Free Alterations</h4>
            <h4><img src={Swap} alt='measuring'/> Easy Exchange & Return</h4>
            <h4> <img src={Truck} alt='measuring'/> Express Delivery</h4>
            <h4> <img src={click_and_collect} alt='measuring'/> Click & Collect</h4>
          </div> 
          <div className='payment'>
            <div className='pay'>
            <h3>PAY SECURLY</h3>
            <div className='img-box'>
                <img src={payment1} alt={payment1}/>
                <img src={payment2} alt={payment2}/>
                <img src={payment3} alt={payment3}/>
                <img src={payment4} alt={payment4}/>
            </div>
            </div>
            <div className='next'>
            Reach out to us <br/>
                For any queries, please write to us:
                <span>customercare@shopyee.com</span>
            </div>
            <div className='download'>
               <h3>DOWNLOAD THE APP</h3> 
               <div className='img-box'>
               <img src={download1} alt={download1} style={{height:'100px',width:"100px",objectFit:'contain'}}/>
               <img src={download2} alt={download2} style={{height:'100px',width:"100px",objectFit:'contain'}}/> 
               </div>
            </div>
            <div className='verify'>
                <h3>Verified By</h3>
                <div className='img-box'>
                    <img src={verify1} alt={verify1}/>
                    <img src={verify2} alt={verify2}/>
                    <img src={verify3} alt={verify3}/>
                    <img src={verify4} alt={verify4}/>
                </div>
            </div>
          </div>
          <div className='Follow'>
            <h3>Follow us On </h3> 
            <img src={x} alt={x}/>
            <img src={instagram} alt='instagram'/>
          </div>
          <div className='ship'>
            <h4><img src={exchange1} alt='measuring'/>Easy Exchange & Return</h4>
            <h4><img src={exchange2} alt='measuring'/>Secure Payment </h4>
            <h4> <img src={exchange3} alt='measuring'/> Express PickUp</h4>
            <h4> <img src={exchange4} alt='measuring'/> Authentic Products <br/> 100% Genuine</h4>
          </div> 
        </div>
    );
};

export default Follow;
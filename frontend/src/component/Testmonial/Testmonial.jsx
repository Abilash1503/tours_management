import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import React from 'react';

const Testmonial = () => {
    const settings={
        dots:true,
        Infinity:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        SlidesToShow:3,
    
        responsive:[
            {
                breakpoint:992,
                settings:{
                    SlidesToShow:2,
                    SlidesToScroll:1,
                    Infinity:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    SlidesToShow:2,
                    SlidesToScroll:1,
                   
                },
            },
           
        ]

    }
    return (
        <Slider {...settings}>
            <div className="testmonial py-4 px-3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
             repellat totam officia! Eos perferendis nobis cupiditate sed! Eius 
             quisquam eligendi vel, rerum est quia ducimus 
             fuga sapiente accusamus ipsum natus.  </p>
   <div className='d-flex align-items-center gap-4 mt-3'>
<img src={ava01} className='w-25 h-25 rounded-2'alt='' />
<div>
    <h6 className='mb-0 mt-3 '>john</h6>
    <p>Customer</p>
</div>
   </div>
        
            </div>
            <div className="testmonial py-4 px-3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
             repellat totam officia! Eos perferendis nobis cupiditate sed! Eius 
             quisquam eligendi vel, rerum est quia ducimus 
             fuga sapiente accusamus ipsum natus.  </p>
   <div className='d-flex align-items-center gap-4 mt-3'>
<img src={ava02} className='w-25 h-25 rounded-2'alt='' />
<div>
    <h6 className='mb-0 mt-3 '>john</h6>
    <p>Customer</p>
</div>
   </div>
        
            </div>
            <div className="testmonial py-4 px-3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
             repellat totam officia! Eos perferendis nobis cupiditate sed! Eius 
             quisquam eligendi vel, rerum est quia ducimus 
             fuga sapiente accusamus ipsum natus.  </p>
   <div className='d-flex align-items-center gap-4 mt-3'>
<img src={ava03} className='w-25 h-25 rounded-2'alt='' />
<div>
    <h6 className='mb-0 mt-3 '>john</h6>
    <p>Customer</p>
</div>
   </div>
        
            </div>
        </Slider>
    );
}

export default Testmonial;

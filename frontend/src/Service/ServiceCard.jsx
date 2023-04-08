
import "./serviceCard.css"
import React from 'react';

const ServiceCard = ({item}) => {

    const {imgUrl,title,desc}= item
    return (
        <div className="search__item">
            <div className="search__img">
                <img src={imgUrl} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
            
        </div>
    );
}

export default ServiceCard;

import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap'
import React from 'react';
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"


const servicesData=[
    {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "Lorem ipsum dolor s qs explicabo commodi quia ipsam, laboriosam ipsum."

},
{
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor s qs explicabo commodi quia ipsam, laboriosam ipsum."

},
{
    imgUrl: customizationImg,
    title: "customization",
    desc: "Lorem ipsum dolor s qs explicabo commodi quia ipsam, laboriosam ipsum."
},
]
const ServiceList = () => {
    return (
       <>
       {
        servicesData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
       }
       </>
    );
}

export default ServiceList;

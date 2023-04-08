
import TourCard from '../../Shared/TourCard';
import React from 'react';
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap';

const FeaturdTourList = () => {
    return (
       <>
       {
      tourData?.map(tour=>(
        <Col lg='3'className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>
      ))
       }
       </>
    );
}

export default FeaturdTourList;

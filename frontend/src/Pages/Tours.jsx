import React, {useState,useEffect} from "react";
import CommonSection from "../Shared/CommonSection";
import "../Style/Tour.css"
import TourCard from "./../Shared/TourCard"
import SearchBar from "./../Shared/SearchBar"
import Newsletter from "./../Shared/Newsletter"
import tourData from "../assets/data/tours"
import { Container,Row,Col } from "reactstrap";
const Tours =()=>{
  const [pagesCount ,setPagesCount]=useState(0)
  const [pages,setPages]=useState(0)


  useEffect(()=>{
    const pages = Math.ceil(5/4)
    setPagesCount(pages)
  },{pages})

    return(
      <>
      <CommonSection title={'All Tours'}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {
              tourData?.map(tour=>( 
              <Col lg='3'className="mb-4" key={tour.id}>

                <TourCard tour={tour}/></Col>
               ) )
            }

            <Col lg='12'>
 <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
{[...Array(pagesCount).keys()].map(number=>(
  <span key={number} onClick={()=>setPages(number)}
  className={pages===number? 'active__page':""}
  >
    {number+1}
  </span>
))}
 </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
      </>
    )
}
export default Tours
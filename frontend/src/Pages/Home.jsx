import React from "react";
import "../Style/Home.css"
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg  from '../assets/images/world.png'
import "../Shared/Subtitles"
import Subtitles from "../Shared/Subtitles";
import SearchBar from "../Shared/SearchBar";
import ServiceList from "../Service/ServiceList";
import FeaturdTourList from "../component/Featured tours/FeaturdTourList";
import experienceImg from "../assets/images/experience.png"
import MasorryImagesGallery from "../component/Image-gallery/MasorryImagesGallery";
import Testmonial from "../component/Testmonial/Testmonial";
import Newsletter from "../Shared/Newsletter";

const Home =()=>{
    return(
       <>
       <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__container">
                        <div className="hero__subtitle d-flex align-items-center">
                         <Subtitles Subtitles={"Know Before you go"}/>
                         <img src={worldImg} alt="" />
                        </div>
                        <h1>Traveling opens the door to creating  <span className="highlight">
                            Memories</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cupiditate quidem vel optio at, libero inventore, omnis temporibus error repudiandae, velit impedit soluta voluptatum odio tempore. Dolor ea earum magnam!</p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img_box">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img_box mt-4">
                        <video src={heroVideo} alt="" controls />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img_box mt-5">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
       </section>
       <section>
        <Container>
            <Row>
                <Col lg='3'>
                <h5 className="service__subtitle">
                    What We Serve
                </h5>
                <h2 className="service__title">We Offer Our best services </h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
       </section>



       <section>
        <Container>
            <Row>
                <Col lg='12'className="mb-5">
                    <Subtitles Subtitles={'Explore'}/>
                    <h2 className="featured__tour-title">
                        Our featured tours
                    </h2>
                </Col>
                <FeaturdTourList/>
            </Row>
        </Container>
       </section>
       <section>
        <Container>
            <Row>
                <Col lg='6'>
               <div className="experience__content">
                <Subtitles Subtitles={'Experience'}/>

                <h2>With our all experience <br/> we will serve you</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing psam!<br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing psam
                </p>
               </div>
               <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                    <span>
                        50k+
                    </span>
                    <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                    <span>
                        10+
                    </span>
                    <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                    <span>
                        35+
                    </span>
                    <h6>Year experience</h6>
                </div>
               </div>
                </Col>
                <Col lg='6'>
               <div className="experience__img">
                <img src={experienceImg} alt="" />
               </div>
                </Col>
            </Row>
        </Container>
       </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                         <Subtitles Subtitles={'Gallery'}/>
                         <h2 className="gallery__title">Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg='12'>
                        <MasorryImagesGallery/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitles Subtitles={'Fans Love'}/>
                            <h2 className="testimonial__title">What our fans say adout us</h2>
                        </Col>
                        <Col lg='12'>
                            <Testmonial/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter/>
       </>
    )
}

export default Home
import React from "react";
import "./Footer.css"
import {container,Row,Col,ListGroup,ListGroupItem, Container}from "reactstrap"
import {Link} from "react-router-dom"



const quicklinks =[
    {
        path:'/home',
        display :'Home'
    },
    {
        path:'/about',
        display :'About'
    },
    {
        path:'/tours',
        display :'Tours'
    },
]
const quicklinks2 =[
    {
        path:'/gallery',
        display :'Gallery'
    },
    {
        path:'/login',
        display :'Login'
    },
    {
        path:'/register',
        display :'Register'
    },
]

const Footer =()=>{


    return(
        <footer className="footer">
      
         
            <Container>
                <Row>
                    <Col lg='3'>
             

                            <div className="social__link d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-github-fill"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-facebook-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-instagram-line"></i></Link>
                            </span>
                           
                            </div>
                        
                    </Col>
                   
<Col lg='3'>
    <h5 className="footer__link-title">Discovery</h5>
    <ListGroup className="footer__quick-links">
    {
        quicklinks.map((item,index)=>(
            <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
        ))
    }

    </ListGroup>
</Col>

<Col lg='3'>
<ListGroup className="footer__quick-links">
<h5 className="footer__link-title">Qucik Links</h5>
    {
        quicklinks2.map((item,index)=>(
            <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
            </ListGroupItem>
        ))
    }

    </ListGroup>
</Col>
<Col lg='3'>
<ListGroup className="footer__quick-links">
<h5 className="footer__link-title">Contact</h5>
    
        
            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-map-pin-line"></i></span>
                Address:
                </h6>
                <p className="mb-0">Abilash , coimbatore</p>
            </ListGroupItem>
            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-mail-line"></i></span>
                Email:
                </h6>
                <p className="mb-0">abilash@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-phone-fill"></i></span>
                Phone
                </h6>
                <p className="mb-0">9854255156</p>
            </ListGroupItem>
       
    

    </ListGroup>
</Col>
<Col lg='12' className="text-center pt-5">
    <p className="copyright">
        Copyrigth 2005,design and develop by
        Abilash.All rigths reserved
    </p>
</Col>
                </Row>
            </Container>
          

            </footer>
           


         
    )
}

export default Footer
import React from 'react'

import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
             <Subtitle subtitle={'Known Before You Go'}/>
             <img src={worldImg} alt="" />
            </div>
            <h1>Travelling opens the door to creating <span  className="highlight">memories</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fugit nobis accusamus molestiae sed, nulla voluptatibus fugiat nam earum quibusdam at, a porro veniam dignissimos! Deserunt qui distinctio eos recusandae?</p>
          </div>
          </Col>

          <Col lg='2'>
         <div className="hero_img-box">
          <img src={heroImg} alt="" />
         </div>
         </Col>
        
         <Col lg='2'>
         <div className="hero_img-box hero_video-box mt-4">
          <video src={heroVideo} alt="" controls/>
         </div>
         </Col>

         <Col lg='2'>
         <div className="hero_img-box mt-5">
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
          <h5 className="services_subtitle">What we serve</h5>
          <h2 className="services_title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

     {/* tour section start */}

     <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className='featured_tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
     </section>


     {/* Experience section starts */}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className='experience_content'>
            <Subtitle subtitle={'Experience'}/>
            <h2>With our all experience <br/> We will serve you</h2>
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
              <br/>
              quas aliqum ,hic tempore invetore suscript unde.
            </p>
          </div>
       <div className="counter_wrapper d-flex align-items-center gap-5">
        <div className="counter_box">
          <span>12k+</span>
          <h6>Successfull Trip</h6>
        </div>
        <div className="counter_box">
          <span>2k+</span>
          <h6>Regular clients</h6>
        </div>
        <div className="counter_box">
          <span>15</span>
          <h6>Years Experience</h6>
        </div>
       </div>


          </Col >
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
     </section>

     {/* gallery sectrion starts */}

     <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          <h2 className='gallery_title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonaryImagesGallery/>
          </Col>
        </Row>
      </Container>
     </section>

     {/* testimonial section */}

     <section>
      <Container>
        <Row>
          <Col lg='12'>
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className='testinomial_title'>What are fans say about us</h2>
          </Col>
          <Col lg='12'>
          <Testimonials/>
          </Col>
        </Row>
      </Container>
     </section>
       <Newsletter/>
    </>
  )
}

export default Home
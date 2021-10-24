import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './App.css';

import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import ChartThree from './components/ChartThree'
import ChartFour from './components/ChartFour'
import ChartFive from './components/ChartFive'
import ChartSix from './components/ChartSix'
AOS.init();
function App() {
  return (
    <div>
      <div className='section-one'>
        <div className='section-one-inner'>
          <h1 style={{textAlign:'center'}}>Data for Main point no.1</h1>
        
  <Row>
 
    <Col xs={6} md={6}>
    <ChartTwo />
    <ChartThree />
    </Col>
    <Col xs={12} md={6}>
      <ChartOne />
    </Col>
  </Row>
 

          </div> 
      </div>
      <div  className='section-two'>
        <div  className='section-two-inner'>
        <Row>
 
 <Col data-aos="flip-up" xs={6} md={6}>
 <ChartFour />
 <ChartFive />
 </Col>
 <Col  data-aos="flip-up"xs={12} md={6}>
   <ChartSix />
 </Col>
</Row>
        </div>
        </div>
      
    </div>
  );
}

export default App;

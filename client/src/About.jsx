import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/abt.jpeg";
import Common from './Common';
const About=()=>{
    return(
        <>
              <Common name='Welcome to Home Page' content="We offer many sub dealer's who are interested to take dealership of cement under our firm for minimum of 6 months with more number of sales" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    )
}
export default About;
import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Home.jpg";
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common name='Grow your business' imgsrc={web} visit="/service" btname="Get Started" />
            <p>Address:<strong>Hanuman Agencies</strong> Hosalli cross</p>
            <p>Yadgir,Karnataka 585202</p>
            <p>Mob.No:94483 33275</p>

        </>
    )
}
export default Home;
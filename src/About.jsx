import React from 'react';
import web from "../src/images/img6.jpg";
import {NavLink} from 'react-router-dom';
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="About " imgsrc={web} visit='/contact' btname="Contact Now" />
        </>
    );
};

export default About;

import React from 'react';
import Header from '../Component/Header';
import Features from '../Component/Features';
import Services from '../Component/Services';
import ScreenShot from '../Component/ScreenShot';
import Feedback from '../Component/Feedback';
import Pricing from '../Component/Pricing';
import Available from '../Component/Available';
import Contact from '../Component/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Services></Services>
            <ScreenShot></ScreenShot>
            <Pricing></Pricing>
            <Feedback></Feedback>
            <Available></Available>
            <Contact></Contact>
        </div>
    );
};

export default Home;
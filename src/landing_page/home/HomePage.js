import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';// double .. are used when we import file from another folder

 function HomePage() {
    return (
       
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        

        </>
      );
 }
 
 export default HomePage;
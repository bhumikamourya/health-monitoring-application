import React from 'react';
import ParticleBackground from './particleBackground.js';
import Component1 from './Component1.js';
import Component2 from './Component2.js';
import Component3 from './Component3.js';
import Component4 from './Component4.js';


function HomePage() {
    return ( 
        <>
        <ParticleBackground/>
        <Component1/>
        {/* <Component2/> */}
        <Component3/>
        <Component4/>
        </>
     );
}

export default HomePage;
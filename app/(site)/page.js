import React from 'react';
import Banner from '../components/sitelayout/home/banner';
import About from '../components/sitelayout/home/about';
import Team from '../components/sitelayout/home/team';

const page = () => {
    return (
        <div >
          <Banner/>
          <About/>
          <Team/>
        </div>
    );
};

export default page;
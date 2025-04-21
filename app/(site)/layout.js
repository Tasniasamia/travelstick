import React from 'react';
import Header from '../components/sitelayout/header';
import Footer from '../components/sitelayout/footer';

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;
import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({children}) => (
    <>
    <Header />
    <div>
        {children}
    </div>
    <Footer />
    </>
    

);

export default Layout;
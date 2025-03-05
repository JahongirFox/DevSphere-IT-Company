import React from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home';

const Layout = ({ children }) => {
    return (
      <>
        <Navbar/>
  
        {/* Main Content */}
        <main className="">
          {children}
          <Home/>
        </main>
  
        {/* Footer */}
        <Footer/>
      </>
    );
  };
  
  export default Layout;
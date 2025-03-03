import React from 'react';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
    return (
      <>
        <Navbar/>
  
        {/* Main Content */}
        <main className="">
          {children}
        </main>
  
        {/* Footer */}
        <Footer/>
      </>
    );
  };
  
  export default Layout;
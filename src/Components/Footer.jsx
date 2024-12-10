import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer classNameName="footer">
      <div className="footer_section layout_padding">
         <div className="container">
            
            <div className="location_main">
               <div className="call_text"><img src="images/call-icon.png"/></div>
               <div className="call_text">Call +01 1234567890</div>
               <div className="call_text"><img src="images/mail-icon.png"/></div>
               <div className="call_text">demo@gmail.com</div>
            </div>
            <div className="social_icon">
               <ul>
                  <li><img src="images/fb-icon.png"/></li>
                  <li><img src="images/twitter-icon.png"/></li>
                  <li><img src="images/linkedin-icon.png"/></li>
                  <li><img src="images/instagram-icon.png"/></li>
               </ul>
            </div>
         </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

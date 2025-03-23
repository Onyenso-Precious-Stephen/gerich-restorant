import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">No 5 mbuakara off elionparnwa, Nigeria </p>
        <p className="p__opensans">+243 818 200 7216 </p>
        <p className="p__opensans">+231 816 229 5944 </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">the best way to find your self is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" style={{margin: 15}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Workin Hours</h1>
        <p className="p__opensans">Monday - Friday </p>
        <p className="p__opensans">08:00 am - 12:00 am </p>
        <p className="p__opensans">Saturday - Sunday </p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>

      </div>
    </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">2025 Stephen. All Right reserved.</p>
    </div>

  </div>
);

export default Footer;

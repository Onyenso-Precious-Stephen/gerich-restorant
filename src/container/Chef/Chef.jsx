import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wraper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's word"/>
      <h1 className='headtext__cormorant'> what we believe in </h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis, placeat repellendus accusantium impedit aliquam repellat modi officiis asperiores similique, </p>
      </div>

      <div className="app__chef-sign">
        <p>kevin luo</p>
        <p className="p__opensans">chef and founder </p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;

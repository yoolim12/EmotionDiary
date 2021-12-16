import React from 'react';
import './MoreAbout.scss';
//scrolling page
import imgA from '../../pages/flowers.png'

const MoreAboutRight = () => {
  return (
    <>
      <div className="fullpage">
        <img className='flower-background' src={imgA} alt="flowers" />

      </div>
    </>
  );
}

export default MoreAboutRight;
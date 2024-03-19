import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain-logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Logo br2 shadow-2'>
        <div className='Tilt-inner pa3'>
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}></img>
          </div>
      </Tilt>
    </div>
  )
}

export default Logo
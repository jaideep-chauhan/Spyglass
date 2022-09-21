import React from 'react';
import './Style.css';
import image4 from '../imges/hr-4.jpg';



export default function UperText() {
  return (
    <div className='main-upertext'>
      <div className='uper-text'>
        <h2>With our specialists, and experts at your disposal, you will face complex HR issues with confidence</h2>
        </div>
        <div className='uper-image'>
        <img src={image4} />
        </div>
        
    </div>
  )
}

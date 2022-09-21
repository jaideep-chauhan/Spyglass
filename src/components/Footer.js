import React from 'react';
import './Style.css';
import image6 from '../imges/spyglasslogo.png'



export default function Footer() {
  return (
    <>
      <div className='footer Bar-top'>
        <div className='s-footer s-footer-1 d-flex'>
        <img src={image6} ></img>
        </div>
        <div className='s-footer s-footer-2'>
            <h4>About Us</h4>
            <span>Spyglass News</span>
            <span>Sustainability</span>
            <span>Supply chain transparency statement</span>
            <span>Spyglass product certification</span>
            <span>Spyglass jobs</span>
        </div>
        <div className='s-footer s-footer-3'>
            <h4>Support</h4>
            <span>Contact Us</span>
            <span>Find Building instruction</span>
            <span>Replacement parts</span>
            <span>Product recalls</span>
        </div>
        <div className='s-footer s-footer-4'>
            <h4>Attractions</h4>
            <span>Spyglass House</span>
            <span>Spyglass Parks</span>
            <span>Spyglass Discovery</span>
            <span>Centers</span>
        </div>
        <div className='s-footer s-footer-5'>
            <h4>More Form Us</h4>
            <span>Spyglass Life</span>
            <span>Spyglass Education</span>
            <span>Spyglass ideas</span>
            <span>Spyglass Foundation</span>
            <span>Spyglass Braille Bricks</span>
        </div>
    </div>
    </>
  )
}

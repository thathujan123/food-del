import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>Being the Pioneers of delivering Fresh Dum-Cooked Handi Biryanis across the country, Royalchef's Biryani takes customer experience up a notch with unique and authentic shaahi andaaz of serving handis of melting flavors. The first ones to introduce ‘Ambur biryani’ concept and deliver freshly prepared biryani for individual orders.</p>
            <div className="footer-social-icons">
                <a href='https://www.instagram.com/royalchefs/'> <img src={assets.facebook_icon} /></a>
                <a href='https://www.instagram.com/royalchefs/'> <img src={assets.twitter_icon} /></a>
                <a href='https://www.linkedin.com/in/nanthakumar-thathujan-3566a7321/'> <img src={assets.linkedin_icon} /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0741556016</li>
                <li>contact@rcb.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Royalchefs.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

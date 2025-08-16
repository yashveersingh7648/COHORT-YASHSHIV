import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const handleFooterLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Us */}
          <div className={styles.section}>
            <h3 className={styles.heading}>About Us</h3>
            <p className={styles.text}>
              We are a leading e-commerce platform offering the best products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li>
                <Link to="/" className={styles.link} onClick={handleFooterLinkClick}>Home</Link>
              </li>
            
              <li>
                <Link to="/About" className={styles.link} onClick={handleFooterLinkClick}>About Us</Link>
              </li>
                <li>
                <Link to="/Mission" className={styles.link} onClick={handleFooterLinkClick}>Mission & Vision</Link>
              </li>
              <li>
                <Link to="/WhySuppcohort" className={styles.link} onClick={handleFooterLinkClick}>Why Suppcohort</Link>
              </li>
                <li>
                <Link to="/WhoWeServe" className={styles.link} onClick={handleFooterLinkClick}>We Serve</Link>
              </li>
              <li>
                <Link to="/Products&Services" className={styles.link} onClick={handleFooterLinkClick}>Products & Services</Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link} onClick={handleFooterLinkClick}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Info</h3>
            <ul className={styles.contact}>
              <li>Email: support@suppcohort.com
</li>
              <li>Phone: +91 98731 20702
</li>
              <li>Address: Bldg No 5, 2nd Floor, Park End, Vikas Marg, Preet Vihar<br /> New Delhi - 110092</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.social}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} All rights reserved By: Ciphershield Technologies. <b>|</b>
          <a href="/Policy" className={styles.copyrightLink} onClick={handleFooterLinkClick}> PrivacyPolicy <b>|</b></a>
          <a href="/ReturnPolicy" className={styles.copyrightLink} onClick={handleFooterLinkClick}> Return-Policy </a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
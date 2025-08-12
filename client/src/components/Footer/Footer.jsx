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
              {/* <li>
                <Link to="/store" className={styles.link}>Store</Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>About Us</Link>
              </li> */}
              <li>
                <Link to="/contact" className={styles.link} onClick={handleFooterLinkClick}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Info</h3>
            <ul className={styles.contact}>
              <li>Email: cohort@company.com</li>
              <li>Phone: +91 1204375355</li>
              <li>Address: Cohort Technology<br /> Noida</li>
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
          <p>&copy; {new Date().getFullYear()} All rights reserved By: Cohort Technologies. <b>|</b>
          <a href="/PrivacyPolicy" className={styles.copyrightLink} onClick={handleFooterLinkClick}> PrivacyPolicy <b>|</b></a>
          <a href="/ReturnPolicy" className={styles.copyrightLink} onClick={handleFooterLinkClick}> Return-Policy <b>|</b></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
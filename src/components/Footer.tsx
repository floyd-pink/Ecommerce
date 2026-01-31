import React from 'react';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        
        <div className={styles.footerSection}>
          <h3 className={styles.brand}>ShopNepal</h3>
          <p>Your trusted destination for quality products at the best prices.</p>
        </div>

        
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>


        <div className={styles.footerSection}>
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://youtube.com">YouTube</a>
          </div>
        </div>
      </div>

      
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} ShopNepal. All rights reserved.</p>
        <p>Made with ❤️ in Nepal</p>
      </div>
    </footer>
  );
};

export default Footer;

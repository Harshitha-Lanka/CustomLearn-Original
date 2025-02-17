import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Left - About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Your trusted platform for online learning.  
            Learn anytime, anywhere, from top experts.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right - Follow Us */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Learning Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

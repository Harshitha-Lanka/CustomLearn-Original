import './Followus.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Followus() {
  return (
    <div className="follow-us-container">
      <h3 className="follow-us-heading">Follow Us On</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}

export default Followus;

import './Certificationsection.css';
import image6 from '../assets/image6.jpg'; // Example certificate image
import { FaAward, FaCheckCircle, FaTrophy } from 'react-icons/fa';

function CertificationsSection() {
  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">Earn Recognized Certificates</h2>

      <div className="certifications-content">
        {/* Left Side - Text + Bullet Points */}
        <div className="certifications-text">
          <p>Every course you complete comes with a professional certificate to showcase your skills and achievements.</p>
          <ul>
            <li><FaAward className="check-icon" /> Boost your resume and career opportunities.</li>
            <li><FaCheckCircle className="check-icon" /> Recognized by top companies and universities.</li>
            <li><FaTrophy className="check-icon" /> Stand out in job applications and promotions.</li>
          </ul>
        </div>

        {/* Right Side - Certificate Image */}
        <div className="certifications-image">
          <img src={image6} alt="Certificate Preview" />
        </div>
      </div>
    
    </div>
  );
}

export default CertificationsSection;

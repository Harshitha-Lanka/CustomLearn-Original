
import Header from './Header.js'
import Slideshow from './Slideshow.js';
import  './Home.css'
import { FaCertificate } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import FAQ from '../Components/FAQ.js'
import Courses from '../Components/Courses.js'
import google from '../assets/google.png'
import microsoft from '../assets/microsoft.png'
import amazon from '../assets/amazon.png'
import ey from '../assets/ey.png'
import meta from '../assets/meta.png'
import facebook from '../assets/facebook.png'
import ibm from '../assets/ibm.png'
import CertificationsSection from './Certificationsection.js';
import Statistics from './Statistics.js';
import Followus from './Followus.js';
import Footer  from './Footer.js'


function Home() {
    return (
      <div>
        <Header/>
       
       <Slideshow/>
       <div className='company-container' id="#home">
        <h2>Learn from 10+ Universities and Companies</h2>
        <img src={google} alt="google"/>
        <img src={microsoft} alt="microsoft"/>
        <img src={meta} alt="meta"/>
       
        <img src={amazon} alt="amazon"/>
        <img src={ey} alt="ey"/>
        <img src={facebook} alt="facebook"/>
        <img src={ibm} alt="ibm"/>

      

       </div>
       <div className="career-container">
      <h2 className="career-title">Invest in your career</h2>
      <div className="career-content">
        <div className="career-box">
          <FaBullseye className="career-icon" />
          <h3>Explore new skills</h3>
          <p>Access 10,000+ courses in AI, business, technology, and more.</p>
        </div>

        <div className="career-box">
          <FaCertificate className="career-icon" />
          <h3>Earn valuable credentials</h3>
          <p>
            Get certificates for every course you finish and boost your chances of getting hired at no additional cost.
          </p>
        </div>

        <div className="career-box">
          <FaStar className="career-icon" />
          <h3>Learn from the best</h3>
          <p>
            Take your skills to the next level with expert-led courses and personalized learning paths tailored to your success.
          </p>
        </div>
      </div>
    </div>
    <div>
      <h1 className='course-container'> 	"Shape Your Future – Discover Courses That Empower You"</h1>
      <Courses/>
      <div>
        <button className='button-container1'>Explore More</button>
      </div>
    </div>
   
   
    
    <CertificationsSection/>
    <FAQ /><br></br><br></br><br></br><br></br>
    <Statistics/>
    <br></br><br>
    </br>
    <Followus/>
    <Footer/>
      </div>
    );
  }
  
  export default Home;
  
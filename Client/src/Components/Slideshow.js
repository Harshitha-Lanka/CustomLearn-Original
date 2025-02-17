import './Slideshow.css';
import { useEffect } from 'react';
import image6 from '../assets/image7.jpg'
import image5 from '../assets/image6.jpg'
import image4 from '../assets/image4.jpg'

function Slideshow() {
  useEffect(() => {
    let slideIndex = 0;

    function showSlides() {
      const slides = document.getElementsByClassName('slides');
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slides fade">
        <img src={image6}alt="Slide 1" />
      </div>
      <div className="slides fade">
        <img src={image5} alt="Slide 2" />
      </div>
      <div className="slides fade">
        <img src={image4} alt="Slide 3" />
      </div>

      <div className="quote-overlay">
        <h1 className="quote-text">
        "Learn today, lead tomorrow – your future starts here!"
        </h1>
      </div>
    </div>
  );
}

export default Slideshow;

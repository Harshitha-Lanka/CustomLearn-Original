import './Courses.css';
import { FaStar } from 'react-icons/fa';
import webdevelopment from '../assets/webdevelopment.jpg'
import react from '../assets/react.png'
import datascience from '../assets/datascience.jpg'
import uiux from '../assets/uiux.jpg'
import machinelearning from '../assets/machinelearning.png'
import digitalmarketing from '../assets/digitalmarketing.jpg'

function CoursesGrid() {
  const courses = [
    { id: 1, title: 'Web Development', description: 'Learn HTML, CSS, and JavaScript.', image: webdevelopment, cost: '$49.99', rating: 4.5 },
    { id: 2, title: 'React Mastery', description: 'Master React with hands-on projects.', image: react, cost: '$59.99', rating: 4.8 },
    { id: 3, title: 'Data Science', description: 'Analyze data using Python and libraries.', image: datascience, cost: '$69.99', rating: 4.6 },
    { id: 4, title: 'UI/UX Design', description: 'Design user-friendly interfaces.', image: uiux, cost: '$39.99', rating: 4.4 },
    { id: 5, title: 'Machine Learning', description: 'Build models with AI techniques.', image: machinelearning, cost: '$89.99', rating: 4.9 },
    { id: 6, title: 'Digital Marketing', description: 'Learn SEO, Ads, and content marketing.', image: digitalmarketing, cost: '$29.99', rating: 4.3 },
  ];

  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <p className="course-cost"><strong>Cost:</strong> {course.cost}</p>
          <div className="course-rating">
            <strong>Rating:</strong> {course.rating} 
            <FaStar className="star-icon" />
            <button className='button-container'>Enroll Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesGrid;

import './Statistics.css';
import { FaUserGraduate, FaBookOpen, FaAward } from 'react-icons/fa'; // Using icons for better visual appeal

function Statistics() {
  const stats = [
    { icon: <FaUserGraduate />, value: '50+', label: 'Learners Worldwide' },
    { icon: <FaBookOpen />, value: '10+', label: 'Courses Available' },
    { icon: <FaAward />, value: '10+', label: 'Certificates Awarded' },
  ];

  return (
    <div className="statistics-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-icon">{stat.icon}</div>
          <h3 className="stat-value">{stat.value}</h3>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;

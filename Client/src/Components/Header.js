import './Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="header-left">
        <h1 className="logo">CustomLearn</h1>
        <a href="#home" className="nav-link">Home</a>
        <a href="#faq-section" className="nav-link">FAQ</a>
        <a href="contact" className="nav-link">Contactus</a>
        <a href="courses" className="nav-link">Courses</a>
      </div>

      <div className="header-middle">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search </button>
      </div>

      <div className="header-right">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default Header;

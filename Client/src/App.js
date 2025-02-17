import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
       
      </Routes>
    </Router>
  );
}

export default App;

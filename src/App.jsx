import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Adjust path if needed
// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        {/* Add other routes here, e.g., <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

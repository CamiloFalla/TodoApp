// Import React, Suspense and lazy for dynamic imports and code splitting
import React, { Suspense, lazy } from 'react';
// Import BrowserRouter as Router, Routes and Route for routing support
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import CSS styles for the App component
import './App.css';
import Todomain from './components/Todomain/Todomain';




/**
 * Function component for the main App structure
 * Utilizes React Router for SPA routing and navigation
 */
function App() {
  return (
    // Router component to keep UI in sync with the URL
    <Router>
      {/* Suspense wraps lazy-loaded components providing a fallback UI during loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Main div wrapper with a className for styling purposes */}
        <div className="App">
          {/* Routes container to define various routes in the application */}
          <Routes>
            {/* Route definitions mapping paths to components */}
            <Route path="/" element={<Todomain />} />           // Route for the initial or root page
            
          </Routes>
        </div> 
      </Suspense>
    </Router>
  );
}

// Export the App component as the default export
export default App;


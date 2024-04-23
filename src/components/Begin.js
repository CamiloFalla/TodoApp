
import React, { Suspense, lazy } from 'react';
import Appointment from './Appointment'


function Begin() {
  return (
    
    <div className="begin-container">
        <Appointment />          // Route for the initial or root page
          
    </div> 
    
  );
}

// Export the App component as the default export
export default Begin;


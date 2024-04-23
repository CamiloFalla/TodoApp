import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import PatientDetail from './pages/PatientDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/patient/:id" component={PatientDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

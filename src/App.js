import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';
 
function App() {
  return (
      <Container className= 'd-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path = '/' component = { Dashboard } />
                <Route path = '/signup' component = { SignUp } />
                <Route path = '/login' component = { LogIn } />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
}

export default App;

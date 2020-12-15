import React from 'react'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';
import ItemsPage from './pages/items/ItemsPage';

 
function App() {
  return (
        <>
        <div style={{display: 'flex'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path = '/' component = { Dashboard } />
                <Route path = '/items' component = { ItemsPage } />
                <Route path = '/signup' component = { SignUp } />
                <Route path = '/Signin' component = { SignIn } />
              </Switch>
            </AuthProvider>
          </Router>
          </div>
       </>      
  );
}

export default App;

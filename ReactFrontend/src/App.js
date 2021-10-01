import React from 'react'
import { Switch , Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './Header';
import LoginUser from './LoginUser';
import RegistrationForm from './RegistrationForm';


function App() {

  return (
    <BrowserRouter>
     <Header/>
     <Switch>
     <Route exact path='/' component={RegistrationForm} />
     <Route exact path='/login'component={LoginUser} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;

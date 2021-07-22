import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from "../components/Auth/SignIn"
import SignUp from '../components/Auth/SignUp';
import ContactUs from '../components/Contact-Us/ContactUs';
// import Home from '../components/Home/Home';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/contact-us" component={ContactUs} />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route exact path="/sign-in" component={SignIn} />
    </Switch>
  );
}

export default Routes;
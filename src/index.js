/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";

import Home from "views/examples/Home.jsx";

// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import CardsFooter from "components/Footers/CardsFooter.jsx";
// import SimpleFooter from "components/Footers/SimpleFooter.jsx";


ReactDOM.render(
  <BrowserRouter>

    {/* <DemoNavbar /> */}
    
    <Switch>
      
      <Route 
      path="/" 
      exact 
      render={props => <Index {...props} />} 
      />

      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />

      <Route
        path="/home"
        exact
        render={props => <Home {...props} />}
      />

      <Route 
      path="/login-page" 
      exact 
      render={props => <Login {...props} />} 
      />

      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />

      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />

      <Redirect to="/" />

    </Switch>

    {/* <SimpleFooter /> */}

  </BrowserRouter>,
  
  document.getElementById("root")
);

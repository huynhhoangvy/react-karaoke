import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";

import useServerMethod from 'app/server';
import history from 'app/history';

import Home from "views/examples/Home.jsx";
import Test from "views/examples/Test"

import { useCookies } from 'react-cookie';
import { useBeforeunload } from 'react-beforeunload';

export default function App() {

    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [user, setUser] = useState('guest');

    const [token, setToken] = useState();
    
    const { postLoginData, logout, addSongToDatabase, getCurrentUser } = useServerMethod(setUser, setCookie, removeCookie, setToken);

    useEffect(() => {
        if (cookies.sessionToken) {
            setToken(cookies.sessionToken);
            console.log('token has been set: ', token)
            getCurrentUser(token);
            console.log('get user');
        }
        }, [token]);

    // const handleOnBeforeUnload = () => {
    //     getCurrentUser();
    // }

    // useBeforeunload(() => getCurrentUser());
    // useBeforeunload(event => event.preventDefault());

    return (
        <Router history={history}>
            {console.log('rendered!!!!!!!!!!!!!')}
            {console.log('print token in appjs: ', token)}
            <DemoNavbar user={user} logout={logout} token={token} />
            <Switch>

                <Route
                    path="/"
                    exact
                    render={props => <Landing {...props} />}
                />

                <Route
                    path="/index"
                    exact
                    render={props => <Index {...props} />}
                />

                <Route
                    path="/home"
                    exact
                    render={props => <Home {...props} user={user} addSongToDatabase={addSongToDatabase} />}
                />

                <Route
                    path="/login"
                    exact
                    render={props => <Login {...props} postLoginData={postLoginData} />}
                />

                <Route
                    path="/profile"
                    exact
                    render={props => <Profile {...props} />}
                />

                <Route
                    path="/register"
                    exact
                    render={props => <Register {...props} />}
                />

                <Route
                    path="/test"
                    exact
                    render={props => <Test {...props} />}
                />

                <Redirect to="/" />

            </Switch>
            <SimpleFooter />
        </Router>


    );
};
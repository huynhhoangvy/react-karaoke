import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import './App.css';

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";

import useServerMethod from 'js/server';
import history from 'js/history';

import Home from "views/examples/Home.jsx";
import Test from "views/examples/Test"

import { useCookies } from 'react-cookie';
import useDataApi from 'js/useDataApi.js';

function App() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const [{ data, setData, isLoading, setIsLoading, isError, setIsError, nextPageToken, setNextPageToken }, doFetch] = useDataApi([], `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAM5ukRQwsSybOOcRhsutGiocSMENpc7PU&part=snippet&maxResults=12&q=trinh,cong,son,karaoke`);

    const [query, setQuery] = useState('');

    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [user, setUser] = useState('guest');

    const [token, setToken] = useState();

    const { postLoginData, logout, addSongToDatabase, getCurrentUser } = useServerMethod(setUser, setCookie, removeCookie, setToken);

    useEffect(() => {
        if (cookies.sessionToken) {
            console.log('token exists: ', cookies.sessionToken);
            getCurrentUser(cookies.sessionToken);
        }
    },[])

    return (
        <Router history={history}>
    {console.log('print pathname: ', history.location.pathname)}
            <DemoNavbar
                user={user}
                logout={logout}
                token={token}
                query={query}
                setQuery={setQuery}
                doFetch={doFetch}
            />
            <Switch>

                <Route
                    path="/landing"
                    exact
                    render={props => <Landing {...props} />}
                />

                <Route
                    path="/index"
                    exact
                    render={props => <Index {...props} />}
                />

                <Route
                    path="/"
                    exact
                    render={props => <Home {...props}
                        user={user}
                        addSongToDatabase={addSongToDatabase}
                        query={query}
                        setQuery={setQuery}
                        data={data}
                        setData={setData}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        isError={isError}
                        setIsError={setIsError}
                        nextPageToken={nextPageToken}
                        setNextPageToken={setNextPageToken}
                    />}
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

export default withRouter(App);
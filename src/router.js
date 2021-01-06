import React from 'react'
import HomeScreen from './pages/HomeScreen'
import LoadingScreen from './pages/LoadingScreen'
import SignInScreen from './pages/SignInScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const WebRouter = () => (
    <Router>
        <Switch>
            <Redirect exact from="/" to="/loading" />
            <Route exact path="/loading" component={LoadingScreen} />
            <Route exact path="/authenticate" component={SignInScreen} />
            <Route exact path="/home" component={HomeScreen} />
        </Switch>
    </Router>
)

export default WebRouter
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import News from '../Screens/News';
import Shop from '../Screens/Shop';
import Analysis from '../Screens/Analysis';
import Header from './Header';
import Footer from "./Footer";


export default () => {
    return (
        <Router>
            <Header />
            <Route path={"/"} exact component={Home} />
            <Route path={"/login"} exact component={Login} />
            <Route path={"/news"} exact component={News} />
            <Route path={"/shop"} exact component={Shop} />
            <Route path={"/analysis"} exact component={Analysis} />
            <Redirect from={"*"} to={"/"}/>
            <Footer />
        </Router>
    );
};

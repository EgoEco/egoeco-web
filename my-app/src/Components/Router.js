import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import News from '../Screens/News';
import Shop from '../Screens/Shop';
import Analysis from '../Screens/Analysis';
import Header from './Header';
import Footer from "./Footer";
import Join from "../Screens/Join";
import ShopDetail from "../Screens/ShopDetail";


export default () => {
    return (
        <Router>
            <Header />
            <Route path={"/"} exact component={Home} />
            <Route path={"/login"} exact component={Login} />
            <Route path={"/join"} exact component={Join} />
            <Route path={"/news"} exact component={News} />
            <Route path={"/shop"} exact component={Shop} />
            <Route path={"/shop/:id"} component={ShopDetail} />
            <Route path={"/analysis"} exact component={Analysis} />
            <Footer />
        </Router>
    );
    //
};

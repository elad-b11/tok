import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CreateLayer from "./components/CreateLayer/CreateLayer.jsx";


const GananotRouter = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/createLayer" component={CreateLayer} />
        </Router>
    );
};

export default GananotRouter;
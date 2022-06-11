import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./css/css-compiled/main.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div id="page-container">
                <div className="container-fluid">
                    <HashRouter basename="/">
                        {/* <Switch> */}
                        <Route exact path="/">
                            <h1>Home</h1>
                        </Route>
                        <Route exact path="/page-one">
                            <h1>Page 1</h1>
                        </Route>
                        <Route exact path="/page-two">
                            <h1>Page 2</h1>
                        </Route>
                    </HashRouter>
                </div>
            </div>
        </>
    );
}

export default App;

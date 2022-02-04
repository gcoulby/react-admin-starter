import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import NavMenu from "./nav_menu";

class Navbar extends Component {
  state = {
    showColapsedMenu: false,
  };

  handleMenuToggleButton = (close) => {
    const showColapsedMenu = close ? false : !this.state.showColapsedMenu;
    this.setState({ showColapsedMenu });

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top  navbar-expand navbar-dark bg-dark print-hide desktop-menu">
          <div className="row">
            <div className="col-auto">
              <h1 className="navbar-brand">
                <HashRouter basename="/">
                  <Link to="/">Site Title</Link>
                </HashRouter>
              </h1>
            </div>
          </div>
          <div className="col-auto">
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mr-auto header-nav">
                <li className="nav-item active"></li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-dark bg-dark mobile-menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-auto">
                <button
                  className="btn btn-outline-light mt-2 mb-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample01"
                  aria-controls="navbarsExample01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => this.handleMenuToggleButton()}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`collapse navbar-collapse ${
              this.state.showColapsedMenu ? "show" : ""
            }`}
            id="navbarsExample01"
          >
            <NavMenu onMenuItemClick={this.handleMenuToggleButton} />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;

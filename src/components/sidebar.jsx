import React, { Component } from "react";
import NavMenu from "./nav_menu";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-wrapper print-hide">
          <nav id="sidebar" className="print-hide">
            <NavMenu />
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;

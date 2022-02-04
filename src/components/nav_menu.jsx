import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";

class NavMenu extends Component {
  state = {
    baseUrl: "/",
    sections: [
      {
        title: "Sub Section",
        pages: [
          {
            url: "/page-one",
            pageName: "Page 1",
            icon: "fa fa-users",
            active: false,
          },
        ],
      },
      {
        title: "Sub Section",
        pages: [
          {
            url: "/page-two",
            pageName: "Page 2",
            icon: "fa fa-address-card",
            active: false,
          },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="row  menu-roller">
          <div className="col-12 col-lg-4"></div>
        </div>
        <ul>
          <HashRouter basename="/">
            {this.state.sections.map((section, i) => {
              return (
                <li key={"section_" + i} className="sidebarGroup">
                  <h6 className="menu-title">{section.title}</h6>
                  <ul className="navbar-nav mr-auto">
                    {section.pages.map((page, j) => (
                      <li
                        key={"page_" + j}
                        className={`${page.active ? "active" : ""}`}
                      >
                        {page.title}
                        <Link
                          to={page.url}
                          onClick={() =>
                            this.props.onMenuItemClick
                              ? this.props.onMenuItemClick()
                              : () => {}
                          }
                        >
                          <i
                            className={`menu-icon ${page.icon}`}
                            aria-hidden="true"
                          ></i>
                          &nbsp;{page.pageName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </HashRouter>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavMenu;

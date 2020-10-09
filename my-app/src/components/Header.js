import React from "react";

function Header() {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo m-0 p-0">
                <a href="index.html" className="mb-0">
                  Warehouse
                </a>
              </h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li>
                    <a href="#home-section" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#properties-section" className="nav-link">
                      Properties
                    </a>
                  </li>
                  <li>
                    <a href="#agents-section" className="nav-link">
                      Agents
                    </a>
                  </li>
                  <li>
                    <a href="#about-section" className="nav-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#news-section" className="nav-link">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;


import React from "react";

function NavbarMain() {
  return (
    <header className="site-navbar js-sticky-header site-navbar-target" role="banner" style={{backgroundColor: "#005AAB"}}>
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="site-logo">
            <a href="index.html" className="text-black" style={{color: "#fff"}}>
              <span className="text-primary" >Brand</span>
            </a>
          </div>

          <div className="col-12">
            <nav className="site-navigation text-right ml-auto" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li>
                  <a href="#home-section" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services-section" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-us-section" className="nav-link">
                    Why Us
                  </a>
                </li>

                <li>
                  <a href="#testimonials-section" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#blog-section" className="nav-link">
                    Blog
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

          <div className="toggle-button d-inline-block d-lg-none">
            <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black">
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarMain;

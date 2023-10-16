import React from "react";
import { Link } from "react-router-dom";

function NavbarMain() {
  return (
    <header
      className="site-navbar js-sticky-header site-navbar-target"
      role="banner"
      style={{ backgroundColor: "#005AAB" }}
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="site-logo">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 70, marginRight: '10px' }}
            /> */}
            <Link to="/"  className="text-black">
              <span style={{ color: "#FFFFFF" }}>Brand</span>
            </Link>
          </div>

          <div className="col-12">
            <nav
              className="site-navigation text-right ml-auto"
              role="navigation"
            >
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                {/* <li>
                  <a href="#why-us-section" className="nav-link">
                    Why Us
                  </a>
                </li> */}

                {/* <li>
                  <a href="#testimonials-section" className="nav-link">
                    Testimonials
                  </a>
                </li> */}
                {/* <li>
                  <a href="#blog-section" className="nav-link">
                    Blog
                  </a>
                </li> */}
                {/* <li>
                  <a href="#contact-section" className="nav-link">
                    Contact
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className="toggle-button d-inline-block d-lg-none">
            <a
              href="#"
              className="site-menu-toggle py-5 js-menu-toggle text-black"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarMain;

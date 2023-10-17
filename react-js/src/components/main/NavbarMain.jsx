import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const userAuth = Cookies.get("userAuth");

// Fungsi logout
const handleLogout = () => {
  // Hapus cookie userAuth dan userRole
  Cookies.remove("userAuth");
  Cookies.remove("userRole");

  // Tambahkan logika tambahan jika diperlukan

  // Contoh perutean ke halaman login setelah logout
  history.push("/login");
};

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
            <img
              src="/img/polban.png"
              alt="avatar"
              style={{ width: 70, marginRight: "10px" }}
            />
            <a href="index.html" className="text-black">
              <span
                className="text-white font-size-10 text-uppercase font-weight-bold"
                style={{ fontSize: 15 }}
              >
                Politeknik Negeri Bandung
              </span>
            </a>
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

                {userAuth == null ? (
                  null
                ) : (
                  <li>
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                )}

                {userAuth == null ? (
                  <li>
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to={"/login"} className="nav-link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                )}

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

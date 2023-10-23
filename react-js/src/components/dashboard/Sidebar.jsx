import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";


function Sidebar() {
  const userAuth = Cookies.get("userAuth");
  const userRole = Cookies.get("userRole");

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-lock"></i>
          </div>
          {userRole == 'admin' ? (
            <div className="sidebar-brand-text mx-3">
              Admin <sup>Nih</sup>
            </div>
          ) : (
            <div className="sidebar-brand-text mx-3">
              Dosen <sup>Nih</sup>
            </div>
          )}
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to = "/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        {userRole == 'admin' ? (
          <li className="nav-item">
            <Link to="/dosen" className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Daftar Dosen</span>
            </Link>
          </li>
        
        ) : (
          null
        )}

        {userRole == 'admin' ? (
          <li className="nav-item">
            <Link to="/pkm" className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Daftar PKM</span>
            </Link>
          </li>
            
        ) : (
          <li className="nav-item">
            <Link to={{ pathname: `/pkm/${userAuth}` }} className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Riwayat PKM</span>
            </Link>
          </li>
        )}

        {userRole == 'admin' ? (
          <li className="nav-item">
            <Link to="/matakuliah" className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Daftar Mata Kuliah</span>
            </Link>
          </li>
          
        ) : (
          <li className="nav-item">
            <Link to={{ pathname: `/matakuliah/${userAuth}` }} className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Riwayat Mata Kuliah</span>
            </Link>
          </li>
        )}

        {userRole == 'admin' ? (
          <li className="nav-item">
            <Link to="/penelitian" className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Daftar Penelitian</span>
            </Link>
          </li>
         
        ) : (
          <li className="nav-item">
            <Link to={{ pathname: `/penelitian/${userAuth}` }} className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Riwayat Penelitian</span>
            </Link>
          </li>
        )}

        {userRole == 'admin' ? (
          null
        ) : (
          <li className="nav-item">
            <Link to={{ pathname: `/pendidikan/${userAuth}` }} className="nav-link">
              <i className="fas fa-fw fa-cog"></i>
              <span>Riwayat Pendidikan</span>
            </Link>
          </li>
        )}
    
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default Sidebar;

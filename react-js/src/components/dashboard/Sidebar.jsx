import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Sidebar() {
  const userAuth = Cookies.get("userAuth");

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
          <div className="sidebar-brand-text mx-3">
            Dosen <sup>Nih</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseDosen"
            aria-expanded="true"
            aria-controls="collapseDosen"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Dosen</span>
          </a>
          <div
            id="collapseDosen"
            className="collapse"
            aria-labelledby="headingDosen"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/dosen" className="collapse-item">
                  Daftar Dosen
              </Link>
              <Link to="/dosen/insert" className="collapse-item">
                  Tambah Dosen
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePkm"
            aria-expanded="true"
            aria-controls="collapsePkm"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Riwayat PKM</span>
          </a>
          <div
            id="collapsePkm"
            className="collapse"
            aria-labelledby="headingPkm"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to={{ pathname: `/pkm/${userAuth}` }} className="collapse-item">
                  Daftar PKM
              </Link>
              <Link to="/pkm/insert" className="collapse-item">
                  Tambah PKM
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePengajaran"
            aria-expanded="true"
            aria-controls="collapsePengajaran"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Riwayat Pengajaran</span>
          </a>
          <div
            id="collapsePengajaran"
            className="collapse"
            aria-labelledby="headingPengajaran"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
            <Link to={{ pathname: `/matakuliah/${userAuth}` }} className="collapse-item">
                  Daftar Mata Kuliah
              </Link>
              <Link to="/matakuliah/insert" className="collapse-item">
                  Tambah Mata Kuliah
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePenelitian"
            aria-expanded="true"
            aria-controls="collapsePenelitian"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Riwayat Penelitian</span>
          </a>
          <div
            id="collapsePenelitian"
            className="collapse"
            aria-labelledby="headingPenelitian"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to={{ pathname: `/penelitian/${userAuth}` }} className="collapse-item">
                  Daftar Penelitian
              </Link>
              <Link to="/penelitian/insert" className="collapse-item">
                  Tambah Penelitian
              </Link>
            </div>
          </div>
        </li>


        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePendidikan"
            aria-expanded="true"
            aria-controls="collapsePendidikan"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Riwayat Pendidikan</span>
          </a>
          <div
            id="collapsePendidikan"
            className="collapse"
            aria-labelledby="headingPendidikan"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to={{ pathname: `/pendidikan/${userAuth}` }} className="collapse-item">
                  Daftar Pendidikan
              </Link>
              <Link to="/pendidikan/insert" className="collapse-item">
                  Tambah Pendidikan
              </Link>
            </div>
          </div>
        </li>

    
        
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

function DosenCards({ dosen }) {
  return (
    <div className="card mb-4" style={{ height: "100%" }}>
      <div className="card-body d-flex flex-column align-items-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
          alt="avatar"
          className="rounded-circle img-fluid"
          style={{ width: 150 }}
        />
        <h5 className="my-3">{dosen.nama_lengkap}</h5>
        <p className="text-muted mb-1">{dosen.jurusan}</p>
        <p className="text-muted mb-1">{dosen.jabatan_fungsional}</p>
        <p className="mb-1">{dosen.email}</p>
        <div className="mt-auto">
          <Link to={{ pathname: `/profile/${dosen.id_dosen}` }}>
            <button type="button" className="btn btn-primary">
              Lihat Profil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DosenCards;

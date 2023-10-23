import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function ListPkm() {
  const [pkm, setPkm] = useState([]);

  useEffect(() => {
    loadPkm();
  }, []);

  const loadPkm = async () => {
    const result = await axios.get("http://localhost:8082/pkm");
    setPkm(result.data);
  };

  async function handleDelete(id_pengabdian) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) {
      return;
    }
    try {
      // Kirim permintaan DELETE ke server dengan parameter id_dosen
      await axios.delete(
        `http://localhost:8082/pkm/delete?id_pengabdian=${id_pengabdian}`
      );
      // Perbarui tampilan dengan menghapus entitas dari state lokal
      setPkm((prevData) =>
        prevData.filter((pkm) => pkm.id_pengabdian !== id_pengabdian)
      );
      alert("Data pkm berhasil dihapus");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }
  return (
    <div className="container">
      <h1 className="text-center p-3 m-3">Daftar PKM</h1>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-end">
          <Link to="/pkm/admin/insert" className="btn btn-primary">Tambah PKM</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th scope="col">ID Pengabdian</th>
                  <th scope="col">Judul Pengabdian</th>
                  <th scope="col">Bidang Pengabdian</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Link PKM</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {pkm.map((pkm) => (
                  <tr key={pkm.id_pengabdian}>
                    <td>{pkm.id_pengabdian}</td>
                    <td>{pkm.judul_pengabdian}</td>
                    <td>{pkm.bidang_pengabdian}</td>
                    <td>{pkm.tgl_pengabdian}</td>
                    <td
                      style={{
                        maxWidth: "200px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <a
                        href={pkm.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pkm.url}
                      </a>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Link to={`/pkm/edit/${pkm.id_pengabdian}`}>
                          <button className="btn btn-success">
                            <FaEdit />
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => handleDelete(pkm.id_pengabdian)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

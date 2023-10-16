import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ListPendidikan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userAuth = Cookies.get("userAuth");
  const userRole = Cookies.get("userRole");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8082/riwayatpendidikan");
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      }
    }
    fetchData();
  }, []);

  async function handleDelete(id_pendidikan) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) {
      return;
    }
    try {
      // Kirim permintaan DELETE ke server dengan parameter id_dosen
      await axios.delete(
        `http://localhost:8082/dosen/delete?id_dosen=${id_pendidikan}`
      );
      // Perbarui tampilan dengan menghapus entitas dari state lokal
      setData((prevData) =>
        prevData.filter((pendidikan) => pendidikan.id_dosen !== id_dosen)
      );
      alert("Data dosen berhasil dihapus");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center p-3 m-3">Daftar Dosen</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">List Dosen</h6>
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
                    <th>ID Dosen</th>
                    <th>ID Riwayat Pendidikan</th>
                    <th>Jenjang</th>
                    <th>Institusi</th>
                    <th>Tahun Lulus</th>
                    <th>Negara</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((pendidikan) => (
                    <tr key={pendidikan.id_dosen}>
                      <td>{pendidikan.id_dosen}</td>
                      <td>{pendidikan.id_riwayat_pendidikan}</td>
                      <td>{pendidikan.jenjang_pendidikan}</td>
                      <td>{pendidikan.institusi}</td>
                      <td>{pendidikan.tahun_lulus}</td>
                      <td>{pendidikan.negara}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          {/* <Link to={{ pathname: `/dosen/edit/${dosen.id_dosen}` }}>
                              <button type="button" className="btn btn-primary">
                                <FaEye />
                              </button>
                            </Link> */}
                          <Link
                            to={{ pathname: `/dosen/edit/${pendidikan.id_dosen}` }}
                          >
                            <button type="button" className="btn btn-success">
                              <FaEdit />
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger ml-2"
                            onClick={() => handleDelete(dosen.id_dosen)}
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
      )}
    </div>
  );
};

export default ListPendidikan;

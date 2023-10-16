import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function ListPendidikanDosen() {

    const [data, setData] = useState([]);
    const userAuth = Cookies.get("userAuth");

    useEffect(()=>{
        loadRiwayatPendidikan();
    },[]);

    const loadRiwayatPendidikan = async()=>{
        const result = await axios.get(`http://localhost:8082/riwayatpendidikan/dosen/${userAuth}`);
        setData(result.data);
    };

    async function handleDelete(id_riwayat_pendidikan) {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
          return;
        }
        try {
          // Kirim permintaan DELETE ke server dengan parameter id_mata_kuliah
          await axios.delete(`http://localhost:8082/riwayatpendidikan/delete?id_riwayat_pendidikan=${id_riwayat_pendidikan}`);
          // Perbarui tampilan dengan menghapus entitas dari state lokal
          setData((prevData) => prevData.filter((riwayatpendidikan) => riwayatpendidikan.id_riwayat_pendidikan !== id_riwayat_pendidikan));
          alert('Data Riwayat Pendidikan Berhasil Dihapus !');
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }
      return (
        <div className="container">
          <h1 className="text-center p-3 m-3">Daftar Riwayat Pendidikan</h1>
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">List Riwayat Pendidikan</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                      <tr>
                        <th >ID Dosen</th>
                        <th >ID Riwayat Pendidikan</th>
                        <th >Jenjang</th>
                        <th >Institusi</th>
                        <th >Tahun Lulus</th>
                        <th >Negara</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((pendidikan) => (
                        <tr key={pendidikan.id_riwayat_pendidikan}>
                          <td>{pendidikan.id_riwayat_pendidikan}</td>
                          <td>{pendidikan.jenjang_pendidikan}</td>
                          <td>{pendidikan.institusi}</td>
                          <td>{pendidikan.tahun_lulus}</td>
                          <td>{pendidikan.negara}</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Link to={{ pathname: `/pendidikan/edit/${pendidikan.id_riwayat_pendidikan}` }}>
                                <button className="btn btn-success">
                                  <FaEdit />
                                </button>
                              </Link>
                              <button
                                className="btn btn-danger ml-2"
                                onClick={() => handleDelete(pendidikan.id_riwayat_pendidikan)}>
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
};

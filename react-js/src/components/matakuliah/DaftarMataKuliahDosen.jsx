import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function DaftarMataKuliahDosen() {

    const [data, setData] = useState([]);
    const userAuth = Cookies.get("userAuth");

    useEffect(()=>{
        loadMataKuliah();
    },[]);

    const loadMataKuliah=async()=>{
        const result = await axios.get(`http://localhost:8082/matakuliah/dosen/${userAuth}`);
        setData(result.data);
        
    };

    async function handleDelete(id_mata_kuliah) {
      // const response = await axios.get(`http://localhost:8082/riwayat_pengajaran/${userAuth}/${id_mata_kuliah}`);
      // const idRiwayatPengajaran = response.data;
      // console.log(idRiwayatPengajaran);
      const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
          return;
        }
        try {
          // Kirim permintaan DELETE ke server dengan parameter id_mata_kuliah
          
          await axios.delete(`http://localhost:8082/matakuliah/delete?id_mata_kuliah=${id_mata_kuliah}`);
          // Perbarui tampilan dengan menghapus entitas dari state lokal
          setData((prevData) => prevData.filter((matakuliah) => matakuliah.id_mata_kuliah !== id_mata_kuliah));
          alert('Data matakuliah berhasil dihapus');
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }
      return (
        <div className="container">
          <h1 className="text-center p-3 m-3">Daftar Mata Kuliah</h1>
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex justify-content-end">
                <Link to="/matakuliah/insert" className="btn btn-primary">Tambah Mata Kuliah</Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                      <tr>
                        <th >Id matakuliah</th>
                        <th >Nama matakuliah</th>
                        <th >Semester</th>
                        <th >Kode Kelas</th>
                        <th >Perguruan Tinggi</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((matakuliah) => (
                        <tr key={matakuliah.id_mata_kuliah}>
                          <td>{matakuliah.id_mata_kuliah}</td>
                          <td>{matakuliah.nama_mata_kuliah}</td>
                          <td>{matakuliah.semester}</td>
                          <td>{matakuliah.kode_kelas}</td>
                          <td>{matakuliah.perguruan_tinggi}</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <Link to={{ pathname: `/matakuliah/edit/${matakuliah.id_mata_kuliah}` }}>
                                <button className="btn btn-success">
                                  <FaEdit />
                                </button>
                              </Link>
                              <button
                                className="btn btn-danger ml-2"
                                onClick={() => handleDelete(matakuliah.id_mata_kuliah)}>
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

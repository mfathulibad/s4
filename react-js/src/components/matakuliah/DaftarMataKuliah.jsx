import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function MataKuliah() {
  const [matakuliah, setMataKuliah] = useState([]);

  useEffect(() => {
    loadMataKuliah();
  }, []);

  const loadMataKuliah=async()=>{
    const result = await axios.get("http://localhost:8082/matakuliah");
    setMataKuliah(result.data);
    };

  async function handleDelete(id_mata_kuliah) {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
    if (!confirmDelete) {
      return;
    }
    try {
      // Kirim permintaan DELETE ke server dengan parameter id_mata_kuliah
      await axios.delete(`http://localhost:8082/matakuliah/delete?id_mata_kuliah=${id_mata_kuliah}`);
      // Perbarui tampilan dengan menghapus entitas dari state lokal
      setMataKuliah((prevData) => prevData.filter((matakuliah) => matakuliah.id_mata_kuliah !== id_mata_kuliah));
      alert('Data Mata Kuliah berhasil dihapus');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }


  return (
    <div className='container'>
        <h1 className="text-center p-3 m-3">Daftar Mata Kuliah</h1>
        <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">List Mata Kuliah</h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead >
                  <tr>
                    <th scope='col'>Id Mata Kuliah</th>
                    <th scope='col'>Mata Kuliah</th>
                    <th scope='col'>Semester</th>
                    <th scope='col'>Kode Kelas</th>
                    <th scope='col'>Perguruan Tinggi</th>
                    <th scope='col'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {matakuliah.map((matakuliah) => (
                    <tr key={matakuliah.id_mata_kuliah}>
                      <td>{matakuliah.id_mata_kuliah}</td>
                      <td>{matakuliah.nama_mata_kuliah}</td>
                      <td>{matakuliah.semester}</td>
                      <td>{matakuliah.kode_kelas}</td>
                      <td>{matakuliah.perguruan_tinggi}</td>
                      <td>
                      <Link to={`/matakuliah/edit/${matakuliah.id_mata_kuliah}`}> <button className="btn btn-success mx-2"><FaEdit /></button></Link>
                      <button className="btn btn-danger ml-2" onClick={() => handleDelete(matakuliah.id_mata_kuliah)}> <FaTrash /></button>
                                
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

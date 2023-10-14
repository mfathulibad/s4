import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div className='py-4'>
        <h2>Daftar Mata Kuliah</h2>
        <div className='table-responsive'>
          <table className="table border shadow">
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
                  <Link to={`/matakuliah/edit/${matakuliah.id_mata_kuliah}`}> <button className="btn btn-outline-primary">Edit</button></Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(matakuliah.id_mata_kuliah)}>Delete</button>
                            
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

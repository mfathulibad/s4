import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function DaftarMataKuliah() {
  const [MataKuliah, setMataKuliah] = useState([]);



  const loadMataKuliah = async () => {
    try {
      const response = await axios.get("http://localhost:8082/MataKuliah");
      setMataKuliah(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    loadMataKuliah();
  }, []);

  async function handleDelete(id_mata_kuliah) {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
    if (!confirmDelete) {
      return;
    }
    try {
      // Kirim permintaan DELETE ke server dengan parameter id_mata_kuliah
      await axios.delete(`http://localhost:8082/MataKuliah/delete?id_mata_kuliah=${id_mata_kuliah}`);
      // Perbarui tampilan dengan menghapus entitas dari state lokal
      setMataKuliah((prevData) => prevData.filter((MataKuliah) => MataKuliah.id_mata_kuliah !== id_mata_kuliah));
      alert('Data Mata Kuliah berhasil dihapus');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your backend endpoint
    axios.post('http://localhost:8082/matakuliah/insert', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success or redirection here

        // Set form data to initial state
        setFormData({
          id_mata_kuliah: '',
          nama_mata_kuliah: '',
          semester: '',
          kode_kelas: '',
          perguruan_tinggi: '',
        });

        // Load updated data
        loadMataKuliah();
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h2>Daftar Mata Kuliah</h2>
        <Link to={`/insert`}>
        <button className='btn btn-outline-primary mb-3'>Add Mata Kuliah</button>
        </Link>
        <form onSubmit={handleSubmit}></form>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead className='table-primary'>
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
              {MataKuliah.map((pl) => (
                <tr key={pl.id_mata_kuliah}>
                  <td>{pl.id_mata_kuliah}</td>
                  <td>{pl.nama_mata_kuliah}</td>
                  <td>{pl.semester}</td>
                  <td>{pl.kode_kelas}</td>
                  <td>{pl.perguruan_tinggi}</td>
                  <td>
                    <Link className='btn btn-outline-primary me-2' to={`edit/${MataKuliah.id_mata_kuliah}`}>Edit</Link>
                    <button className='btn btn-danger'onClick={() => handleDelete(pl.id_mata_kuliah)}>Delete</button>
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

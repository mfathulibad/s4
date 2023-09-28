import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function DaftarMataKuliah() {

    const [matakuliah, setMataKuliah] = useState([]);

    useEffect(()=>{
        loadMataKuliah();
    },[]);

    const loadMataKuliah=async()=>{
        const result = await axios.get("http://localhost:8082/MataKuliah");
        setMataKuliah(result.data);
    };

    async function handleDelete(id_mata_kuliah) {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
          return;
        }
        try {
          // Kirim permintaan DELETE ke server dengan parameter id_mata_kuliah
          await axios.delete(`http://localhost:8082/MataKuliah/delete?id_mata_kuliah=${id_mata_kuliah}`);
          // Perbarui tampilan dengan menghapus entitas dari state lokal
          setData((prevData) => prevData.filter((matakuliah) => matakuliah.id_mata_kuliah !== id_mata_kuliah));
          alert('Data Mata Kuliah berhasil dihapus');
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }

  return (
    <div className='container'>
        <div className='py-4'>
            <h2>Daftar Mata Kuliah</h2>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id Mata Kuliah</th>
                    <th scope="col"> Mata Kuliah</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Kode Kelas</th>
                    <th scope="col">Perguruan Tinggi</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        matakuliah.map((pl)=>(
                            <tr key={pl.id_mata_kuliah}>
                                <td>{pl.id_mata_kuliah}</td>
                                <td>{pl.nama_mata_kuliah}</td>
                                <td>{pl.semester}</td>
                                <td>{pl.kode_kelas}</td>
                                <td>{pl.perguruan_tinggi}</td>
                                <td>
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`/EditMataKuliah/${matakuliah.id_mata_kuliah}`}    
                                    >Edit</Link>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div> 
  )
}

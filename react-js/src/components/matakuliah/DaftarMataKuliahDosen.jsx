import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";

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
    <div className='container'>
        <div className='py-4'>
            <h2>matakuliah</h2>

            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id matakuliah</th>
                    <th scope="col">Nama matakuliah</th>
                    <th scope="col">Semester </th>
                    <th scope="col">Kode Kelas </th>
                    <th scope="col">Perguruan Tinggi</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((matakuliah)=>(
                            <tr key={matakuliah.id_mata_kuliah}>
                                <td>{matakuliah.nama_mata_kuliah}</td>
                                <td>{matakuliah.semester}</td>
                                <td>{matakuliah.kode_kelas}</td>
                                <td>{matakuliah.perguruan_tinggi}</td>
                                <td>
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`edit/${matakuliah.id_mata_kuliah}`}    
                                    >Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => handleDelete(matakuliah.id_mata_kuliah)}>Delete</button>
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

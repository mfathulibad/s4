import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function ListPenelitian() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        loadPenelitian();
    },[]);

    const loadPenelitian=async()=>{
        const result = await axios.get("http://localhost:8082/penelitian");
        setData(result.data);
    };

    async function handleDelete(id_penelitian) {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
          return;
        }
        try {
          // Kirim permintaan DELETE ke server dengan parameter id_penelitian
          await axios.delete(`http://localhost:8082/penelitian/delete?id_penelitian=${id_penelitian}`);
          // Perbarui tampilan dengan menghapus entitas dari state lokal
          setData((prevData) => prevData.filter((penelitian) => penelitian.id_penelitian !== id_penelitian));
          alert('Data penelitian berhasil dihapus');
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }

  return (
    <div className='container'>
        <div className='py-4'>
            <h2>Penelitian</h2>

            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Id Penelitian</th>
                    <th scope="col">Judul Penelitian</th>
                    <th scope="col">Bidang Penelitian</th>
                    <th scope="col">Tanggal Penelitian</th>
                    <th scope="col">URL</th>
                    <th scope="col">PDF</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((penelitian)=>(
                            <tr key={penelitian.id_penelitian}>
                                <td>{penelitian.id_penelitian}</td>
                                <td>{penelitian.judul_penelitian}</td>
                                <td>{penelitian.bidang_penelitian}</td>
                                <td>{penelitian.tgl_penelitian}</td>
                                <td style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    <a href={penelitian.url} target="_blank" rel="noopener noreferrer">{penelitian.url}</a>
                                </td>
                                <td style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    <a href={`http://localhost:8082/penelitian/download-pdf/${penelitian.id_penelitian}`} target="_blank" rel="noopener noreferrer">{penelitian.path_pdf}</a>
                                </td>
                           
                                <td>
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`edit/${penelitian.id_penelitian}`}    
                                    >Edit</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => handleDelete(penelitian.id_penelitian)}>Delete</button>
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

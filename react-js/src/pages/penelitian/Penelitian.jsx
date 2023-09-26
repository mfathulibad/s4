import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Penelitian() {

    const [penelitian, setPenelitian] = useState([]);

    useEffect(()=>{
        loadPenelitian();
    },[]);

    const loadPenelitian=async()=>{
        const result = await axios.get("http://localhost:8082/penelitian");
        setPenelitian(result.data);
    };

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
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        penelitian.map((pl)=>(
                            <tr key={pl.id_penelitian}>
                                <td>{pl.id_penelitian}</td>
                                <td>{pl.judul_penelitian}</td>
                                <td>{pl.bidang_penelitian}</td>
                                <td>{pl.tgl_penelitian}</td>
                                <td>
                                    <Link className='btn btn-outline-primary mx-2'
                                        to={`/editpenelitian/${penelitian.id_penelitian}`}    
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

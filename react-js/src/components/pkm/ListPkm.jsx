import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ListPkm() {

    const userAuth = Cookies.get("userAuth");

    const [pkm, setPkm] = useState([]);

    useEffect(() => {
        loadPkm();
    }, []);

    const loadPkm = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/pkm/dosen/${userAuth}`);
            setPkm(response.data);
            console.log (response.data);
        } catch (error) {
            console.error('Error loading PKM data:', error);
        }
    }

    async function handleDelete(id_pengabdian) {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
            return;
        }
        try {
            // Kirim permintaan DELETE ke server dengan parameter id_dosen
            await axios.delete(`http://localhost:8082/pkm/delete?id_pengabdian=${id_pengabdian}`);
            // Perbarui tampilan dengan menghapus entitas dari state lokal
            setPkm((prevData) => prevData.filter((pkm) => pkm.id_pengabdian !== id_pengabdian));
            alert('Data PKM berhasil dihapus');
        } catch (error) {
            console.error('Error deleting PKM data:', error);
        }
    }

    return (
        <div className="container">
            <h2 className="text-center">PKM List</h2>
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">ID Pengabdian</th>
                        <th scope="col">Judul Pengabdian</th>
                        <th scope="col">Bidang Pengabdian</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Link PKM</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pkm.map((pkm) => (
                        <tr key={pkm.id_pengabdian}>
                            <td>{pkm.id_pengabdian}</td>
                            <td>{pkm.judul_pengabdian}</td>
                            <td>{pkm.bidang_pengabdian}</td>
                            <td>{pkm.tgl_pengabdian}</td>
                            <td style={{ maxWidth: '200px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                <a href={pkm.url} target="_blank" rel="noopener noreferrer">{pkm.url}</a>
                            </td>
                            <td>
                                <Link to={`/pkm/edit/${pkm.id_pengabdian}`}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(pkm.id_pengabdian)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

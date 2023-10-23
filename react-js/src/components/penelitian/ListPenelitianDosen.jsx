import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ListPenelitianDosen = () => {

    const [data, setData] = useState([]);
    const userAuth = Cookies.get("userAuth");

    useEffect(()=>{
        loadPenelitian();
    },[]);

    const loadPenelitian=async()=>{
        const result = await axios.get(`http://localhost:8082/penelitian/dosen/${userAuth}`);
        setData(result.data);
    };

    async function handleDelete(idPenelitian) {
        const response = await axios.get(`http://localhost:8082/riwayat_penelitian/${userAuth}/${idPenelitian}`);
        const idRiwayatPenelitian = response.data;
        console.log(idRiwayatPenelitian);
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
            return;
        }
    
        try {
            // Kirim permintaan DELETE ke server dengan parameter id_riwayat_penelitian
            await axios.delete(`http://localhost:8082/penelitian/riwayat/delete?id_riwayat_penelitian=${idRiwayatPenelitian}`);
            // Perbarui tampilan dengan menghapus entitas dari state lokal
            setData((prevData) => prevData.filter((penelitian) => penelitian.id_penelitian!== idPenelitian));
            alert('Data penelitian berhasil dihapus');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }
    


    return (
        <div className="container">
            <h1 className="text-center p-3 m-3">Daftar Penelitian</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-end">
                    <Link to="/penelitian/insert" className="btn btn-outline-primary">Tambah Penelitian</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0">
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
                                {data.map((penelitian)=>(
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
                                            <div className="d-flex justify-content-center">
                                                <Link to={{ pathname: `/penelitian/edit/${penelitian.id_penelitian}` }}>
                                                    <button type="button" className="btn btn-success">
                                                    <FaEdit />
                                                    </button>
                                                </Link>
                                                <button
                                                    className="btn btn-danger ml-2"
                                                    onClick={() => handleDelete(penelitian.id_penelitian)}>
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

export default ListPenelitianDosen;

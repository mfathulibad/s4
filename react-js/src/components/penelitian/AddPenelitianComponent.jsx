import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddPenelitianComponent() {

    let navigate=useNavigate()
    
    const [penelitian, setPenelitian] = useState({
        id_penelitian:"",
        judul_penelitian:"",
        bidang_penelitian:"",
        tgl_penelitian:""
    });

    // const{id_penelitian, judul_penelitian, bidang_penelitian, tgl_penelitian}=penelitian

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setPenelitian({
          ...penelitian,[name]: value,
        });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/penelitian/insert", penelitian)
        navigate("/")
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col offset border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Tambah Data Penelitian</h2>

                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='idPenelitian' className='form-label'>
                            ID Penelitian
                        </label>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            placeholder='Masukkan Id Penelitian' 
                            name='id_penelitian' 
                            value={penelitian.id_penelitian}
                            onChange={onInputChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='judulPenelitian' className='form-label'>
                            Judul Penelitian
                        </label>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            placeholder='Masukkan Judul Penelitian' 
                            name='judul_penelitian' 
                            value={penelitian.judul_penelitian}
                            onChange={onInputChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='bidangPenelitian' className='form-label'>
                            Bidang Penelitian
                        </label>
                        <input 
                            type={'text'} 
                            className='form-control' 
                            placeholder='Masukkan Bidang Penelitian' 
                            name='bidang_penelitian' 
                            value={penelitian.bidang_penelitian}
                            onChange={onInputChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='tglPenelitian' className='form-label'>
                            Tanggal Penelitian
                        </label>
                        <input 
                            type='date' 
                            className='form-control' 
                            placeholder="YYYY-MM-DD" 
                            name='tgl_penelitian' 
                            value={penelitian.tgl_penelitian}
                            onChange={onInputChange}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Add</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}


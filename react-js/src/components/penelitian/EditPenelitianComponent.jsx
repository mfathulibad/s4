import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function EditPenelitianComponent({id}) {
  const [penelitian, setPenelitian] = useState({});
  const [loading, setLoading] = useState(true);
    
    const [formData, setFormData] = useState({
        id_penelitian:``,
        judul_penelitian:``,
        bidang_penelitian:``,
        tgl_penelitian:``
    });

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:8082/penelitian/${id}`);
            setPenelitian(response.data);
            setFormData(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
    
        fetchData();
    }, [id]);
    
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,[name]: value,
        });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8082/penelitian/update`, formData);
            console.log(response.data);
            alert('Data penelitian berhasil diperbarui');
          } catch (error) {
            console.error('Error updating data:', error);
          }
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col offset border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Data Penelitian</h2>

                <form onSubmit={onSubmit}>
                  <div className='mb-3'>
                        <label htmlFor='judulPenelitian' className='form-label'>
                            ID Penelitian
                        </label>
                        <input 
                            type={'text'} 
                            className='form-control'  
                            name='id_penelitian' 
                            value={formData.id_penelitian}
                            onChange={onInputChange}
                            disabled/>
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
                            value={formData.judul_penelitian}
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
                            value={formData.bidang_penelitian}
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
                            value={formData.tgl_penelitian}
                            onChange={onInputChange}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Simpah Perubahan</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditPenelitianComponent;

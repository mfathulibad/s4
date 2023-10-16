import EditMataKuliahComponent from "../../components/matakuliah/EditMataKuliahComponent"; // Import the correct component
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";

import { useParams } from 'react-router-dom';

function EditMataKuliah() {
  const { id } = useParams();
  return(
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
            <EditMataKuliahComponent id={id}/>
              
            </div>
          </div>
        </div>
      </div>
    </> 
  )

  
  
}


export default EditMataKuliah;
